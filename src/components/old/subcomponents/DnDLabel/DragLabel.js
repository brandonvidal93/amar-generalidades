import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, colorBg, img, group }) => {
  const [{ isDragging }, drag] = useDrag({
  // const [drag] = useDrag({
    item: { name, type: type, group, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // console.log(dropResult.groupId);
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);

        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO
        document.getElementById(dropResult.groupId).style.backgroundColor = colorBg;
        document.getElementById(dropResult.groupId).style.borderColor = colorBg;
        document.getElementById(dropResult.groupId).classList.add('disabledSolid2');
        document.getElementById('check-' + dropResult.groupId).classList.remove('disabledGray4');
        document.getElementById(dropResult.groupId).innerHTML = '<p class = "">' + type + '</p>';

        document.getElementById('audioNotification').src = 'audio/check.mp3';
        document.getElementById('audioNotification').play();

        countWords(item);
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
    <div className = { 'dragWord d-Flex j-C aI-C ' + group } ref = { drag } style = {{ ...style, 'opacity': opacity }} id = {'dragWord-' + id } >
      <p className = 'labelDrag tCenter' dangerouslySetInnerHTML = {{ __html: name }} style = {{ 'backgroundColor' : colorBg }}></p>
    </div>
  )
}

export default DragWord;
