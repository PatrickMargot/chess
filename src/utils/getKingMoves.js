import getDiagonalMoves from './getDiagonalMoves';
import getStraightMoves from './getStraightMoves';
import getNextChessBoard from './getNextChessBoard';
import checkKingCheck from './checkKingCheck';

export default function getKingMoves(kingPosition, chessBoard) {

  const { y, x } = kingPosition;

  const king = chessBoard[y][x];

  const kingHasMoved = king.moves.length > 0;

  const kingIsChecked = checkKingCheck(king.color, chessBoard);

  const moves = [
    ...getStraightMoves(kingPosition, chessBoard, 1),
    ...getDiagonalMoves(kingPosition, chessBoard, 1),
  ];

  if (kingHasMoved || kingIsChecked) return moves;

  // castling
  const castlingOptions = [
    {
      rook: chessBoard[y][0],
      move: { y, x: x - 2 },
      path: { y, x: x - 1 },
    },
    {
      rook: chessBoard[y][7],
      move: { y, x: x + 2 },
      path: { y, x: x + 1 },
    },
  ];

  castlingOptions.forEach(({ rook, move, path }) => {

    if (rook === null) return;

    const rookHasMoved = rook.moves.length > 0;

    if (rookHasMoved) return;

    const pieceOnMove = chessBoard[move.y][move.x];

    const pieceOnPath = chessBoard[path.y][path.x];

    const kingOnPathChessBoard = getNextChessBoard(
      kingPosition,
      path,
      chessBoard
    );

    const pathIsChecked = checkKingCheck(king.color, kingOnPathChessBoard);

    !pathIsChecked
      && pieceOnPath === null
      && pieceOnMove === null
      && moves.push(move);

  });

  return moves;

}