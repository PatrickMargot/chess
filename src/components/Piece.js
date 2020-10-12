import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessRook,
  faChessQueen,
  faChessKing,
} from '@fortawesome/free-solid-svg-icons';

import { PIECES } from '../constants';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none',
    display: 'grid',
    placeItems: 'center',
  },

  icon: ({ color }) => ({
    color,
    width: '70% !important',
    height: '70%',
    stroke: 'black',
    strokeWidth: 15,
  }),
}));

const pieceIcons = {
  [PIECES.PAWN]: faChessPawn,
  [PIECES.BISHOP]: faChessBishop,
  [PIECES.KNIGHT]: faChessKnight,
  [PIECES.ROOK]: faChessRook,
  [PIECES.QUEEN]: faChessQueen,
  [PIECES.KING]: faChessKing,
};

function Piece(props) {

  const {
    piece,
    canInteract,
    dragControls,
  } = props;

  const classes = useStyles({ color: piece?.color });

  return (
    <AnimatePresence>
      {piece &&
        <motion.div
          key={piece.id}
          layoutId={piece.id}
          className={classes.root}
          exit={{
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 },
          }}
          transition={{
            type: 'spring',
            stiffness: 1000,
            damping: 65,
          }}
          drag={canInteract}
          dragControls={dragControls}
          dragElastic={1}
          dragMomentum={false}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragTransition={{
            bounceStiffness: 900,
            bounceDamping: 55,
          }}
        >
          <FontAwesomeIcon
            icon={pieceIcons[piece.name]}
            className={classes.icon}
          />
        </motion.div>
      }
    </AnimatePresence>
  );
}

export default Piece;