import React from 'react';
import { useDrop } from 'react-dnd';

// const style = {
//   position: 'absolute'
// }

const DropWord = ({ id, type, groupId }) => {
  // console.log(id, type, groupId);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: type, groupId: groupId }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'boxDrop d-Flex j-C aI-C' ref = { drop }  id = { groupId } >

    </div>
  )
}
export default DropWord;

// <img alt = 'Imagen' className = 'pAbs dNone' id = { 'imgRes-' + imgResId } src = { imgRes }/>
// style = {{ ...style, 'top': posY, 'left': posX, 'width': size }}
// <img alt = 'Imagen' className = '' src = { img }/>
