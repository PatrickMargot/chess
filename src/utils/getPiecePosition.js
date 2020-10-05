export default function getPiecePosition(checkPiece, chessBoard) {

  for (let y = 0; y < chessBoard.length; y++) {

    const row = chessBoard[y];

    for (let x = 0; x < row.length; x++) {

      const piece = row[x];

      if (piece && checkPiece(piece)) {

        return { y, x };

      }

    }

  }

  return null;

}