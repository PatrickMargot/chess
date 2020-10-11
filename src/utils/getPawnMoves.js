import get from 'lodash/get';

import { COLORS } from '../constants';

export default function getPawnMoves(pawnPosition, chessBoard) {

  const { x, y } = pawnPosition;

  const pawn = chessBoard[y][x];

  const moves = [];

  const direction = pawn.color === COLORS.WHITE ? -1 : 1;

  const pieceAbove = get(chessBoard, `${y + direction}[${x}]`);

  const pieceTwoAbove = get(chessBoard, `${y + 2 * direction}[${x}]`);

  const pieceAboveLeft = get(chessBoard, `${y + direction}[${x - 1}]`);

  const pieceAboveRight = get(chessBoard, `${y + direction}[${x + 1}]`);

  const pawnIsStarting = pawn.color === COLORS.WHITE
    ? y === 6
    : y === 1;

  pieceAbove === null
    && moves.push({ y: y + direction, x });

  pieceAbove === null
    && pieceTwoAbove === null
    && pawnIsStarting
    && moves.push({ y: y + 2 * direction, x });
  
  pieceAboveLeft
    && pieceAboveLeft.color !== pawn.color
    && moves.push({ y: y + direction, x: x - 1 });

  pieceAboveRight
    && pieceAboveRight.color !== pawn.color
    && moves.push({ y: y + direction, x: x + 1 });

  return moves;

}