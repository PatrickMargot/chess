import getPawnMoves from './getPawnMoves';
import getKnightMoves from './getKnightMoves';
import getKingMoves from './getKingMoves';
import getStraightMoves from './getStraightMoves';
import getDiagonalMoves from './getDiagonalMoves';

import { PIECES } from '../constants';

export default function getMovesWithChecks(selectedPosition, chessBoard) {

  const { x, y } = selectedPosition;
  
  const selectedPiece = chessBoard[y][x];

  if (selectedPiece === null) return [];

  switch (selectedPiece.name) {

    case PIECES.PAWN:
      return getPawnMoves(selectedPosition, chessBoard);

    case PIECES.KNIGHT:
      return getKnightMoves(selectedPosition, chessBoard);

    case PIECES.BISHOP:
      return getDiagonalMoves(selectedPosition, chessBoard);

    case PIECES.ROOK:
      return getStraightMoves(selectedPosition, chessBoard);

    case PIECES.QUEEN:
     return [
       ...getDiagonalMoves(selectedPosition, chessBoard),
       ...getStraightMoves(selectedPosition, chessBoard),
     ];

    case PIECES.KING:
      return getKingMoves(selectedPosition, chessBoard);

    default:
      return undefined;

  }

}