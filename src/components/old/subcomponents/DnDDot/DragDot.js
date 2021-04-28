import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, colorBg, img, group }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type, group },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }

        document.getElementById('dragWord-' + id).classList.add('disabledGray3');
        document.getElementById('imgRes-' + id).classList.remove('dNone');

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        // countWords(item);
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

  return (
    <div className = { 'dragWord d-Flex j-C aI-C ' + group } ref = { drag } style = {{ ...style, 'opacity': opacity }} id = {'dragWord-' + id } onDragEnd = { countWords } >
      <img alt = 'Imagen' className = '' src = { img }/>
    </div>
  )
}

export default DragWord;
