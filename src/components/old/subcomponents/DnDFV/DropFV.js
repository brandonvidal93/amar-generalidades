import React from 'react';
import { useDrop } from 'react-dnd';

const style = {

}

const DropWord = ({ posY, posX, type, size, id, color }) => {
  // console.log(color);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: type, id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  // 'top': posY, 'left': posX, 'width': size
  return (
    <div className = 'dF-C-cc boxDrop mB-2' ref = { drop } style = {{ ...style }} id = { 'boxDrop-' + id + '-' + type } >

    </div>
  )
}
export default DropWord;
