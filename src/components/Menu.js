import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import GitHubIcon from '@material-ui/icons/GitHub';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { motion } from "framer-motion";

import { useHistory } from "react-router-dom";

import ChessBoard from './ChessBoard';

import { CHESSBOARD_TYPE, PATHS } from '../constants';

const chessBoardThemes = [
  {
    label: 'Green',
    WHITE: '#eeeed2',
    BLACK: '#8ab757',
  },
  {
    label: 'Blue',
    WHITE: '#d3f4e5',
    BLACK: '#53beb5',
  },
  {
    label: 'Purple',
    WHITE: '#e9eaff',
    BLACK: '#c197f7',
  },
  {
    label: 'Brown',
    WHITE: '#ffe7de',
    BLACK: '#d69f61',
  },
];

const useStyles = makeStyles(theme => ({

  root: {
    height: '100%',
    display: 'grid',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    alignItems: 'center',
    gridTemplateColumns: 'auto min(50vw, 72vh)',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'auto',
    },
  },

  chessBoardContainer: {
    height: 'min(50vw, 72vh)',
    gridRow: '1 / 3',
    gridColumn: '2 / 3',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  title: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(5),
    textAlign: 'center',
    borderRadius: 20,
  },

  buttons: {
    display: 'grid',
    justifyContent: 'center',
    gridGap: theme.spacing(1),
    gridTemplateColumns: '70%',

    '& .MuiButton-root': {
      width: '100%',
      padding: theme.spacing(1.5),
      borderRadius: 15,
      textTransform: 'none',
    },
  },

  themesDialogTitle: {
    minWidth: 160,
  },

  themesDialogItem: {
    '& .MuiListItemIcon-root': {
      minWidth: 0,
    }
  },

}));


function Menu(props) {

  const {
    chessBoardTheme,
    setChessBoardTheme,
  } = props;

  const [themesDialogOpen, setThemesDialogOpen] = useState(false);

  const [continueDialog, setContinueDialog] = useState(null);

  const [aboutDialogOpen, setAboutDialogOpen] = useState(false);

  const classes = useStyles();

  const history = useHistory();

  const buttons = [
    {
      variant: 'contained',
      text: 'Computer',
      color: 'primary',
      handleClick: () => {
        if (localStorage.getItem(CHESSBOARD_TYPE.COMPUTER) === null) {

          history.push(PATHS.COMPUTER_GAME);

        } else {

          setContinueDialog({
            handleContinueClick: () => history.push(PATHS.COMPUTER_GAME),
            handleNewGameClick: () => {
              localStorage.removeItem(CHESSBOARD_TYPE.COMPUTER);
              history.push(PATHS.COMPUTER_GAME);
            },
          });

        }
      },
    },
    {
      variant: 'contained',
      text: '2 Players',
      color: 'primary',
      handleClick: () => {
        if (localStorage.getItem(CHESSBOARD_TYPE.TWO_PLAYERS) === null) {

          history.push(PATHS.TWO_PLAYER_GAME);

        } else {

          setContinueDialog({
            handleContinueClick: () => history.push(PATHS.TWO_PLAYER_GAME),
            handleNewGameClick: () => {
              localStorage.removeItem(CHESSBOARD_TYPE.TWO_PLAYERS);
              history.push(PATHS.TWO_PLAYER_GAME);
            },
          });

        }
      },
    },
    {
      variant: 'outlined',
      text: 'Themes',
      color: 'default',
      handleClick: () => setThemesDialogOpen(true),
    },
    {
      variant: 'outlined',
      text: 'About',
      color: 'default',
      handleClick: () => setAboutDialogOpen(true),
    },
  ];

  return (
    <div className={classes.root}>

      <motion.div
        className={classes.titleContainer}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <Paper className={classes.title}>
          <Typography variant="h1">
            Chess
            </Typography>
        </Paper>
      </motion.div>
      <div className={classes.buttons}>
        {buttons.map(({ variant, text, color, handleClick }, i) => (
          <motion.div
            key={text}
            initial={{
              y: 400,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: i * 0.15 + 0.3,
                duration: 0.7,
              },
            }}
          >
            <Button variant={variant} color={color} onClick={handleClick} >
              <Typography variant="h6">
                {text}
              </Typography>
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={classes.chessBoardContainer}
        initial={{
          x: 900,
          rotate: 40,
        }}
        animate={{
          x: 0,
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.7,
            ease: "circOut",
          },
        }}
      >
        <ChessBoard chessBoardTheme={chessBoardTheme} chessBoardType={CHESSBOARD_TYPE.AUTOPLAY} />
      </motion.div>

      <Dialog onClose={() => setThemesDialogOpen(false)} open={themesDialogOpen}>
        <DialogTitle className={classes.themesDialogTitle}>Themes</DialogTitle>
        <List>
          {chessBoardThemes.map(({ label, WHITE, BLACK }, i) => (
            <ListItem
              className={classes.themesDialogItem}
              button
              onClick={() => {
                setChessBoardTheme({ WHITE, BLACK });
                setThemesDialogOpen(false);
              }}
              key={i}
            >
              <ListItemText primary={label} />
              <ListItemIcon>
                <FiberManualRecordIcon style={{ color: BLACK }} fontSize="large" />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Dialog>

      <Dialog onClose={() => setContinueDialog(null)} open={continueDialog !== null} >
        <DialogTitle>Unfinished Game</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Would you like to continue your last game?
          </DialogContentText>
          <DialogActions>
            <Button onClick={continueDialog?.handleContinueClick} color="primary" >
              Continue
            </Button>
            <Button onClick={continueDialog?.handleNewGameClick} color="primary" >
              Create New Game
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <Dialog onClose={() => setAboutDialogOpen(false)} open={aboutDialogOpen} >
        <DialogTitle>About</DialogTitle>
        <DialogContent>
          <DialogContentText >
            Hi, I'm Patrick Margot and I created this chess app.
          </DialogContentText>
          <DialogActions>
            <Button
              color="primary"
              endIcon={<GitHubIcon />}
              href="https://github.com/PatrickMargot"
              target="_blank"
            >
              Checkout My Github
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default Menu;