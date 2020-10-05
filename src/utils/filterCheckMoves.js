import getNextChessBoard from "./getNextChessBoard";
import checkKingCheck from './checkKingCheck';

export default function getNonCheckMoves(moves, selectedPosition, chessBoard) {

  const { y: selectedY, x: selectedX } = selectedPosition;

  const selectedPiece = chessBoard[selectedY][selectedX];

  const nonCheckMoves = moves.filter(({ y, x }) => {

    const newChessBoard = getNextChessBoard(
      { y: selectedY, x: selectedX },
      { y, x },
      chessBoard
    );

    return !checkKingCheck(selectedPiece.color, newChessBoard);

  });

  return nonCheckMoves;

}