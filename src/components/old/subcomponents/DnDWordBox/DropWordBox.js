import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  position: 'absolute'
}

const DropWord = ({ posY, posX, type, size, id, colorBorder, img, imgRes, imgResY, imgResX, imgResId }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: type, id: id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'boxDrop' ref = { drop } style = {{ ...style, 'top': posY, 'left': posX, 'width': size }} id = { 'boxDrop-' + id } >
      <img alt = 'Imagen' className = '' src = { img }/>
      <img alt = 'Imagen' className = 'pAbs dNone' id = { 'imgRes-' + id } src = { imgRes } style = {{ 'top': imgResY, 'left': imgResX }}/>
    </div>
  )
}
export default DropWord;

// import React from 'react';
// import { useDrop } from 'react-dnd';
//
// const style = {
//   position: 'absolute'
// }
//
// const DropWord = ({ posY, posX, type, size, id, colorBorder, img, imgRes, imgResY, imgResX, imgResId }) => {
//   const [{ canDrop, isOver }, drop] = useDrop({
//     accept: type,
//     drop: () => ({ name: type }),
//     collect: monitor => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop(),
//     }),
//   })
//   const isActive = canDrop && isOver
//   if (isActive) {
//   } else if (canDrop) {
//   }
//   return (
//     <div className = 'boxDrop' ref = { drop } style = {{ ...style, 'top': posY, 'left': posX, 'width': size }} id = { 'boxDrop-' + type } >
//       <img alt = 'Imagen' className = '' src = { img }/>
//       <img alt = 'Imagen' className = 'pAbs dNone' id = { 'imgRes-' + imgResId } src = { imgRes } style = {{ 'top': imgResY, 'left': imgResX }}/>
//     </div>
//   )
// }
// export default DropWord;
