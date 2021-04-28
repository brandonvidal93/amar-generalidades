import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  cursor: 'move',
  position: 'absolute'
}

const DragItem = ({ name, path, posY, posX, type, id, countDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${id} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        // console.log(document.getElementById('infoDrop-' + id));
        // console.log(document.getElementById('dragBox-' + id));

        document.getElementById('dragBox-' + id).classList.add('dNone');
        document.getElementById('infoDrop-' + id).classList.remove('dNone');

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        countDrag();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1
  // opacity: monitor.isDragging() ? 0.5 : 1

  let top = posY;
  let left = posX;

  return (
    <div ref = { drag } style = {{ ...style, 'opacity': opacity, 'top': top, 'left': left }} id = {'dragBox-' + id } >
      <img
        alt = 'Drag'
        className = ''
        src = { path } />
    </div>
  )
}

export default DragItem;
