import React from 'react';
import { useDrag } from 'react-dnd';

const STYLE = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, bgColor }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        // console.log(document.getElementById('infoDrop-' + id));
        // console.log(document.getElementById('dragBox-' + id));
        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('boxDrop-' + type).classList.add('WordDropped');
        document.getElementById('boxDrop-' + type).style.backgroundColor = bgColor;
        document.getElementById('boxDrop-' + type).innerHTML = '<p class = "">' + type + '</p>';

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();
      } else {
        document.getElementById('audioNotification').src = 'audio/error.mp3';
        document.getElementById('audioNotification').play();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const OPACTITY = isDragging ? 0.4 : 1
  const BACKGROUNDCOLOR = bgColor

  return (
    <div className = 'dragWord d-Flex j-C aI-C' ref = { drag } style = {{ ...STYLE, 'opacity': OPACTITY, 'backgroundColor': BACKGROUNDCOLOR }} id = {'dragWord-' + id } onDragEnd = { countWords }>
      <p>{ type }</p>
    </div>
  )
}

export default DragWord;
