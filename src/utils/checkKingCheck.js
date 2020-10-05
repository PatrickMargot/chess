import some from 'lodash/some';

import getDiagonalMoves from './getDiagonalMoves';
import getStraightMoves from './getStraightMoves';
import getMovesWithChecks from './getMovesWithChecks';
import getPiecePosition from './getPiecePosition';
import { PIECES } from '../constants';

export default function checkKingCheck(kingColor, chessBoard) {

  const kingPosition = getPiecePosition(
    piece => piece.color === kingColor && piece.name === PIECES.KING,
    chessBoard
  );

  for (let y = 0; y < chessBoard.length; y++) {

    const row = chessBoard[y];

    for (let x = 0; x < row.length; x++) {

      const piece = row[x];

      if (piece && piece.color !== kingColor) {

        const enemeyMoves = piece.name === PIECES.KING
          ? [
            ...getStraightMoves({ y, x }, chessBoard, 1),
            ...getDiagonalMoves({ y, x }, chessBoard, 1),
          ]
          : getMovesWithChecks({ y, x }, chessBoard);

        if (some(enemeyMoves, kingPosition)) {

          return true;

        }

      }

    }

  }

  return false;

}