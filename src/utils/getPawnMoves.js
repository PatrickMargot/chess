import get from 'lodash/get';

import { COLORS } from '../constants';

export default function getPawnMoves(selectedPosition, chessBoard) {

  const { x, y } = selectedPosition;

  const piece = chessBoard[y][x];

  const moves = [];

  const direction = piece.color === COLORS.WHITE ? -1 : 1;

  const pieceAhead = get(chessBoard, `${y + direction}[${x}]`);

  const pieceTwoAhead = get(chessBoard, `${y + 2 * direction}[${x}]`);

  const pieceAheadLeft = get(chessBoard, `${y + direction}[${x - 1}]`);

  const pieceAheadRight = get(chessBoard, `${y + direction}[${x + 1}]`);

  const pawnIsStarting = piece.color === COLORS.WHITE
    ? y === 6
    : y === 1;

  pieceAhead === null
    && moves.push({ y: y + direction, x });

  pieceAhead === null
    && pieceTwoAhead === null
    && pawnIsStarting
    && moves.push({ y: y + 2 * direction, x });
  
  pieceAheadLeft
    && pieceAheadLeft.color !== piece.color
    && moves.push({ y: y + direction, x: x - 1 });

  pieceAheadRight
    && pieceAheadRight.color !== piece.color
    && moves.push({ y: y + direction, x: x + 1 });

  return moves;

}