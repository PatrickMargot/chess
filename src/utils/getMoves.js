import getMovesWithChecks from './getMovesWithChecks';
import filterCheckMoves from './filterCheckMoves';

export default function getMoves(selectedPosition, chessBoard) {

  const moves = getMovesWithChecks(selectedPosition, chessBoard);

  return filterCheckMoves(moves, selectedPosition, chessBoard);

}