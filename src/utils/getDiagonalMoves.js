import getMovesInALine from './getMovesInALine';

export default function getDiagonalMoves(selectedPosition, chessBoard, length = Infinity) {

  return [

    ...getMovesInALine(selectedPosition, { y: -1, x: -1 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: -1, x: 1 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: 1, x: -1 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: 1, x: 1 }, chessBoard, length),

  ];

}