import getMovesInALine from './getMovesInALine';

export default function getStraightMoves(selectedPosition, chessBoard, length = Infinity) {

  return [

    ...getMovesInALine(selectedPosition, { y: -1, x: 0 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: 0, x: -1 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: 0, x: 1 }, chessBoard, length),

    ...getMovesInALine(selectedPosition, { y: 1, x: 0 }, chessBoard, length),

  ];

}