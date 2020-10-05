import inRange from 'lodash/inRange';

export default function getMovesInALine(selectedPosition, increment, chessBoard, length = Infinity) {

  const { y: startY, x: startX } = selectedPosition;

  const selectedPiece = chessBoard[startY][startX];

  const { y: yIncrement, x: xIncrement } = increment;

  const line = [];

  for (let i = 1; line.length < length; i++) {

    const y = startY + yIncrement * i;

    const x = startX + xIncrement * i;

    if (inRange(y, chessBoard.length) && inRange(x, chessBoard[0].length)) {

      const piece = chessBoard[y][x];

      if (piece) {

        if (piece.color !== selectedPiece.color) {

          line.push({ y, x });

        }

        break;

      } else {

        line.push({ y, x });

      }


    } else {

      break;

    }

  }

  return line;

}