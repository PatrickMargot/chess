import React, { useState, useRef, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useHistory } from "react-router-dom";

import some from 'lodash/some';
import capitalize from 'lodash/capitalize';
import random from 'lodash/random';

import { AnimateSharedLayout } from "framer-motion";

import Field from './Field';
import createChessBoard from '../utils/createChessBoard';
import getNextChessBoard from '../utils/getNextChessBoard';
import getMoves from '../utils/getMoves';
import checkKingCheck from '../utils/checkKingCheck';
import getAllMoves from '../utils/getAllMoves';
import { COLORS, PIECES, CHESSBOARD_TYPE } from '../constants';

const borderRadius = 7;

const useStyles = makeStyles(theme => ({
  root: ({ notInteractable, chessBoardTheme }) => ({
    height: '100%',
    pointerEvents: notInteractable ? 'none' : 'auto',
    display: 'grid',
    placeContent: 'center',
    gridTemplateRows: 'repeat(8, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    borderRadius: borderRadius + 2,
    border: `3px ${chessBoardTheme.BLACK} solid`,
    backgroundColor: chessBoardTheme.BLACK,
    boxShadow: '0 8px 8px -6px rgba(0, 0, 0, 0.25)',
    '& > :first-child': {
      borderTopLeftRadius: borderRadius,
    },
    '& > :nth-child(8)': {
      borderTopRightRadius: borderRadius,
    },
    '& > :nth-last-child(8)': {
      borderBottomLeftRadius: borderRadius,
    },
    '& > :last-child': {
      borderBottomRightRadius: borderRadius,
    },
  }),

  dialog: {
    minWidth: 180,
  },

}));

function ChessBoard(props) {

  const {
    chessBoardTheme,
    chessBoardType,
  } = props;

  const [chessBoardHistory, setChessBoardHistory] = useState(() => {

    const localValue = localStorage.getItem(chessBoardType);

    return localValue !== null && chessBoardType !== CHESSBOARD_TYPE.AUTOPLAY
      ? JSON.parse(localValue)
      : [createChessBoard()];

  });

  const chessBoard = chessBoardHistory[chessBoardHistory.length - 1];

  const setChessBoard = chessBoard => {

    const start = performance.now();

    setChessBoardHistory([...chessBoardHistory, chessBoard])

    console.log(performance.now() - start);

  };

  const [selectedPosition, setSelectedPosition] = useState(null);

  const [dialogText, setDialogText] = useState(null);

  const movesRef = useRef([]);

  const history = useHistory();

  const playerColor = chessBoardHistory.length % 2 === 0
    ? COLORS.BLACK
    : COLORS.WHITE;

  const enemyColor = chessBoardHistory.length % 2 === 0
    ? COLORS.WHITE
    : COLORS.BLACK;

  const isComputerRound =
    chessBoardType === CHESSBOARD_TYPE.AUTOPLAY
    || (chessBoardType === CHESSBOARD_TYPE.COMPUTER && playerColor === COLORS.BLACK);

  const classes = useStyles({
    notInteractable: isComputerRound,
    chessBoardTheme
  });

  useEffect(() => {

    chessBoardType !== CHESSBOARD_TYPE.AUTOPLAY
      && chessBoardHistory.length > 1
      && localStorage.setItem(chessBoardType, JSON.stringify(chessBoardHistory));


    const allMoves = getAllMoves(playerColor, chessBoard);

    if (chessBoardType !== CHESSBOARD_TYPE.AUTOPLAY && allMoves.length === 0) {

      const kingIsChecked = checkKingCheck(playerColor, chessBoard);

      const dialogMessage = kingIsChecked
        ? `${capitalize(enemyColor)} won by checkmate.`
        : `Draw by stalemate`

      setTimeout(() => setDialogText(dialogMessage), 1000);

      localStorage.removeItem(chessBoardType);

    }


    isComputerRound && setTimeout(() => {

      const allMoves = getAllMoves(playerColor, chessBoard);

      const randomMove = allMoves[random(allMoves.length - 1)];

      if (randomMove === undefined) return;

      const { position, move } = randomMove;

      const nextChessBoard = getNextChessBoard(
        position,
        move,
        chessBoard
      );

      setChessBoard(nextChessBoard);

    }, chessBoardType === CHESSBOARD_TYPE.AUTOPLAY ? 3000 : 1000);

  }, [ chessBoard ]);

  function deselect() {

    movesRef.current = [];

    setSelectedPosition(null);

  }

  function handleClick(position) {

    const { y, x } = position;

    const clickedPiece = chessBoard[y][x];

    if (selectedPosition && some(movesRef.current, { y, x })) {

      const nextChessBoard = getNextChessBoard(
        { y: selectedPosition.y, x: selectedPosition.x },
        { y, x },
        chessBoard
      );

      setChessBoard(nextChessBoard);

      deselect();

    } else if (clickedPiece) {

      movesRef.current = getMoves(position, chessBoard);

      setSelectedPosition(position);

    } else if (selectedPosition) {

      deselect();

    }

  }

  const fields = chessBoard.map((row, y) => {

    return row.map((piece, x) => {

      const position = { y, x };

      const isMove = some(movesRef.current, position);

      const isSelected = selectedPosition && chessBoard[selectedPosition.y][selectedPosition.x] === piece;

      const isChecked =
        piece
        && piece.name === PIECES.KING
        && checkKingCheck(piece.color, chessBoard);

      return (
        <Field
          key={`${y}${x}`}
          piece={piece}
          playerColor={playerColor}
          position={position}
          backgroundColor={chessBoardTheme[
            (y + x) % 2 === 0 ? COLORS.WHITE : COLORS.BLACK
          ]}
          isSelected={isSelected}
          isMove={isMove}
          isChecked={isChecked}
          onClick={handleClick}
        />
      );

    });

  });

  return (
    <div
      className={classes.root}
    >
      <AnimateSharedLayout>
        {fields}
      </AnimateSharedLayout>

      <Dialog onClose={() => history.push('/')} open={dialogText !== null} >
        <DialogTitle>Game Over</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialog} >
            {dialogText}
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => history.push('/')} color="primary" >
              Continue
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

    </div>
  );
}

export default ChessBoard;