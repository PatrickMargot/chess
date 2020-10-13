import getMovesWithChecks from './getMovesWithChecks';
import filterCheckMoves from './filterCheckMoves';

export default function getMoves(selectedPosition, chessBoard) {

  if (selectedPosition === null) return [];

  const moves = getMovesWithChecks(selectedPosition, chessBoard);

  return filterCheckMoves(moves, selectedPosition, chessBoard);

}