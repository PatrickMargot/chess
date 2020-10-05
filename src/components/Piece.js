import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from 'framer-motion'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none',
  },
}));

const piecesTheme = {
  WHITE: {
    PAWN: '♙',
    BISHOP: '♗',
    KNIGHT: '♘',
    ROOK: '♖',
    QUEEN: '♕',
    KING: '♔',
  },
  BLACK: {
    PAWN: '♟︎',
    BISHOP: '♝',
    KNIGHT: '♞',
    ROOK: '♜',
    QUEEN: '♛',
    KING: '♚',
  },
}

function Piece(props) {

  const {
    piece,
    canInteract,
    dragControls,
  } = props;

  const classes = useStyles();

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
          <svg
            width='100%'
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="85"
            >
              {piecesTheme[piece.color][piece.name]}
            </text>
          </svg>
        </motion.div>
      }
    </AnimatePresence>
  );
}

export default Piece;