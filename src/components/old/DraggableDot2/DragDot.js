import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, colorBg }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }

        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('boxDrop-' + type).classList.add('WordDropped');
        document.getElementById('boxDrop-' + type).style.backgroundColor = colorBg;
        document.getElementById('boxDrop-' + type).innerHTML = '<h1 class = "">' + type + '</h1>';
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.2 : 1

  return (
    <div className = { 'dragWord d-Flex j-C aI-C'} ref = { drag } style = {{ ...style, 'opacity': opacity, 'backgroundColor': colorBg }} id = {'dragWord-' + id } onDragEnd = { countWords } >
      <h1 className = '' dangerouslySetInnerHTML = {{ __html: type }}></h1>
    </div>
  )
}

export default DragWord;
