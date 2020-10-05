import getMoves from './getMoves';

export default function getAllMoves(playerColor, chessBoard) {

  const piecePositions = chessBoard.flatMap((row, y) =>

    row.flatMap((piece, x) => {

      return piece && piece.color === playerColor
        ? { y, x }
        : [];

    })

  );

  return piecePositions.flatMap(position => {

    const moves = getMoves(position, chessBoard);

    return moves.map(move => ({ position, move }));

  });

}