import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

import { PIECES, COLORS } from '../constants';

export default function getNextChessBoard(lastPosition, newPosition, chessBoard) {

  const { y: lastY, x: lastX } = lastPosition;

  const { y: newY, x: newX } = newPosition;

  const nextChessBoard = cloneDeep(chessBoard);

  const selectedPiece = nextChessBoard[lastY][lastX];

  nextChessBoard[newY][newX] = cloneDeep(
    {
      ...selectedPiece,
      moves: selectedPiece.moves.concat(newPosition),
    }
  );

  nextChessBoard[lastY][lastX] = null;

  // promote pawn
  const finishY = selectedPiece.color === COLORS.WHITE
    ? 0
    : chessBoard.length - 1;

  if (selectedPiece.name === PIECES.PAWN && newY === finishY) {

    nextChessBoard[newY][newX].name = PIECES.QUEEN;

  }

  // castling
  if (selectedPiece.name === PIECES.KING && nextChessBoard[newY][newX].moves.length === 1) {

    const kingCastledLeft = isEqual(newPosition, { y: newY, x: 2 });

    const kingCastledRight = isEqual(newPosition, { y: newY, x: 6 });

    if (kingCastledLeft) {

      nextChessBoard[newY][3] = cloneDeep(
        {
          ...nextChessBoard[newY][0],
          moves: selectedPiece.moves.concat(newPosition),
        }
      );

      nextChessBoard[newY][0] = null;

    } else if (kingCastledRight) {

      nextChessBoard[newY][5] = cloneDeep(
        {
          ...nextChessBoard[newY][7],
          moves: selectedPiece.moves.concat(newPosition),
        }
      );

      nextChessBoard[newY][7] = null;

    }

  }


  return nextChessBoard;

}