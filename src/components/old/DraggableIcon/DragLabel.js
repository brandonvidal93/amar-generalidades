import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ text, type, id, countWords, img }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { text, type: type, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // console.log('Recibo del Drop el name: ' + id);
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);

        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR LA INFO
        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('textDrop').innerHTML = '<p class = "">' + text + '</p>';

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        countWords();
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
    <div className = { 'dragWord d-Flex j-C aI-C'} ref = { drag } style = {{ ...style, opacity }} id = {'dragWord-' + id } >
      <img alt = 'Imagen' className = '' src = { img }/>
    </div>
  )
}

export default DragWord;

// <h1 className = 'labelDrag tCenter' dangerouslySetInnerHTML = {{ __html: name }} ></h1>
