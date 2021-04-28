import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, colorBg, img }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // console.log('Recibo del Drop el name: ' + dropResult.name);

        let numItem = parseInt(dropResult.name.substring(0));
        // console.log('parseInt: ' + numItem);
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);

        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR LA INFO
        document.getElementById(numItem).style.borderWidth = 0;
        document.getElementById('dragWord-' + numItem).classList.add('dNone');
        document.getElementById('numberDrop-' + numItem).classList.remove('dNone');
        document.getElementById(numItem).classList.add('dropped');
        document.getElementById(numItem).innerHTML = '<p class = "">' + dropResult.text + '</p>'

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
    <div className = { 'dragWord d-Flex j-C aI-C'} ref = { drag } style = {{ ...style, opacity, 'backgroundColor' : colorBg }} id = {'dragWord-' + id } >
      <h1 className = 'labelDrag tCenter' dangerouslySetInnerHTML = {{ __html: name }} ></h1>
    </div>
  )
}

export default DragWord;
