import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useDragControls } from 'framer-motion'
import { Color } from 'framer'

import Piece from './Piece';

const useStyles = makeStyles(theme => ({

  root: ({ canInteract, isMove, hasPiece }) => ({
    cursor: canInteract && (hasPiece || isMove) ? 'pointer' : 'auto',
    position: 'relative',
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  }),

  dot: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: '35%',
    width: '35%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    display: 'inline-block',
  },

}));

function Field(props) {

  const {
    piece,
    playerColor,
    position,
    backgroundColor,
    isSelected,
    isChecked,
    isMove,
    onClick,
  } = props;

  const canInteract = isMove || piece === null || piece.color === playerColor;

  const dragControls = useDragControls();

  const classes = useStyles({
    canInteract,
    isMove,
    hasPiece: piece !== null,
  });

  const selectedBackgroundColor = Color.mix(
    Color(backgroundColor),
    Color('#ff0')
  )(0.4);

  const checkedBackgroundColor = '#ff7961';

  function handleMouseUp() {

    isMove && onClick(position);

  }

  function handleMouseDown(event) {

    dragControls.start(event, { cursorProgress: { y: 0.5, x: 0.5 } });

    !isSelected && !isMove && onClick(position);

  }

  return (
    <motion.div
      className={classes.root}
      onMouseDown={canInteract ? handleMouseDown : null}
      onMouseUp={canInteract ? handleMouseUp : null}
      initial={false}
      animate={{
        backgroundColor: isSelected
          ? selectedBackgroundColor
          : isChecked
            ? checkedBackgroundColor
            : backgroundColor,
        transition: { duration: 0.13 }
      }}
    >
      <motion.div
        className={classes.dot}
        initial={{ scale: 0 }}
        animate={{ scale: isMove ? 1 : 0, transition: { duration: 0.2 } }}
      />
      <Piece
        piece={piece}
        canInteract={canInteract}
        dragControls={dragControls}
      />
    </motion.div >
  );
}

export default Field;