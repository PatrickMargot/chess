import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ChessBoard from './ChessBoard';
import Menu from './Menu';

import { CHESSBOARD_TYPE, PATHS } from '../constants';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8bc34a',
    },
    secondary: {
      main: '#eeeed2',
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    overflow: 'hidden',
  },
  chessBoardContainer: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '95vmin',
    gridTemplateRows: '95vmin',
    placeContent: 'center',
  },
}));

function App() {

  const classes = useStyles();

  const [chessBoardTheme, setChessBoardTheme] = useState(() => {

    const localValue = localStorage.getItem('CHESSBOARD_THEME');

    return localValue !== null
      ? JSON.parse(localValue)
      : {
        WHITE: '#eeeed2',
        BLACK: '#8ab757',
      };

  });

  useEffect(() => {

    localStorage.setItem('CHESSBOARD_THEME', JSON.stringify(chessBoardTheme));

  }, [chessBoardTheme]);

  function ChessBoardContainer(props) {

    return (
      <motion.div
        className={classes.chessBoardContainer}
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
          },
        }}
      >
        {props.children}
      </motion.div>
    );

  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Switch>

            <Route path={PATHS.COMPUTER_GAME}>
              <ChessBoardContainer>
                <ChessBoard chessBoardTheme={chessBoardTheme} chessBoardType={CHESSBOARD_TYPE.COMPUTER} />
              </ChessBoardContainer>
            </Route>

            <Route path={PATHS.TWO_PLAYER_GAME}>
              <ChessBoardContainer>
                <ChessBoard chessBoardTheme={chessBoardTheme} chessBoardType={CHESSBOARD_TYPE.TWO_PLAYERS} />
              </ChessBoardContainer>
            </Route>

            <Route path="/">
              <Menu chessBoardTheme={chessBoardTheme} setChessBoardTheme={setChessBoardTheme} />
            </Route>

          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
