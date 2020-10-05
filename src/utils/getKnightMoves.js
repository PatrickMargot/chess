import inRange from 'lodash/inRange';

export default function getKnightMoves(selectedPosition, chessBoard) {

  const { x, y } = selectedPosition;

  const piece = chessBoard[y][x];

  const moves = [
    { y: y - 2, x: x - 1 },
    { y: y - 2, x: x + 1 },
    { y: y - 1, x: x + 2 },
    { y: y + 1, x: x + 2 },
    { y: y + 2, x: x + 1 },
    { y: y + 2, x: x - 1 },
    { y: y + 1, x: x - 2 },
    { y: y - 1, x: x - 2 },
  ];

  const movesInsideBoardAndLegal = moves.filter(({ y, x }) => {

    const isInRange = inRange(y, chessBoard.length) && inRange(x, chessBoard[0].length);

    return isInRange && (chessBoard[y][x] === null || chessBoard[y][x].color !== piece.color);

  });

  return movesInsideBoardAndLegal;

}