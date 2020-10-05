import uniqueId from 'lodash/uniqueId';
import times from 'lodash/times';

import { PIECES, COLORS } from '../constants';

function getInitialPieceName(y, x) {

  if (y === 1 || y === 6) {

    return PIECES.PAWN;
    
  }

  if (y === 0 || y === 7) {

    switch (x) {

      case 0:
      case 7:
        return PIECES.ROOK;

      case 1:
      case 6:
        return PIECES.KNIGHT;

      case 2:
      case 5:
        return PIECES.BISHOP;

      case 3:
        return PIECES.QUEEN;

      case 4:
        return PIECES.KING;

      default:
        // do nothing
    }

  }

  return null;

}

function getInitialPieceColor(y) {

  switch (y) {

    case 0:
    case 1:
      return COLORS.BLACK;

    case 6:
    case 7:
      return COLORS.WHITE;

    default:
      return null;

  }

}

export default function createChessBoard() {

  return times(8, y => times(8, x => {

    const name = getInitialPieceName(y, x);

    const color = getInitialPieceColor(y);

    const id = uniqueId('piece_');

    const moves = [];

    return name
      ? { name, color, id, moves }
      : null;

  }));

}