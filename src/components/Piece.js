import React, { useState } from 'react';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessPawn,
  faChessBishop,
  faChessKnight,
  faChessRook,
  faChessQueen,
  faChessKing,
} from '@fortawesome/free-solid-svg-icons';

import { isMobile } from "react-device-detect";

import { PIECES } from '../constants';

const useStyles = makeStyles(theme => ({
  root: ({ isDragging }) => ({
    zIndex: isDragging ? 2 : 1,
    height: '100%',
    position: 'absolute',
    display: 'grid',
    placeItems: 'center',
  }),

  icon: {
    width: '70% !important',
    height: '70%',
    stroke: '#444',
    strokeWidth: 15,
  },
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
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const classes = useStyles({ isDragging });

  const dragControls = useDragControls();

  return (
    <AnimatePresence>
      {piece &&
        <motion.div
          key={piece.id}
          layoutId={piece.id}
          className={classes.root}
          style={{
            color: piece?.color,
          }}
          animate={{
            scale: isMobile && isDragging ? 2 : 1,
          }}
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
          onPointerDown={event => dragControls.start(event, { cursorProgress: { y: 0.5, x: 0.5 } })}
          drag={canInteract}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
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