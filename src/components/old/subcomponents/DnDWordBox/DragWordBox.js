import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, colorBg, img, group, audio }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type, group, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(`You dropped ${item.id} into ${dropResult.id}`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }

        document.getElementById('dragWord-' + id).classList.add('dNone');
        document.getElementById('imgRes-' + dropResult.id).classList.remove('dNone');
        document.getElementById('imgRes-' + dropResult.id).src = 'img/3/drag-' + id + '.png';
        // console.log(document.getElementById('audioNotification'));
        // console.log(audio.check);
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
    <div className = { 'dragWord ' + group } ref = { drag } style = {{ ...style, opacity }} id = {'dragWord-' + id } >
      <img alt = 'Imagen' className = '' src = { img }/>
      <h5 className = 'tCenter' dangerouslySetInnerHTML = {{ __html: name }}></h5>
    </div>
  )
}

export default DragWord;

//
// import React from 'react';
// import { useDrag } from 'react-dnd';
//
// const style = {
//   cursor: 'move'
// }
//
// const DragWord = ({ name, type, id, countWords, colorBg, img, group }) => {
//   const [{ isDragging }, drag] = useDrag({
//     item: { name, type: type, group },
//     end: (item, monitor) => {
//       const dropResult = monitor.getDropResult()
//       if (item.type && dropResult.name) {
//         console.log(`You dropped ${item.type} into ${dropResult.name}!`);
//         // console.log(`You dropped ${type} item`);
//         // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO onDragEnd = { countWords }
//
//         document.getElementById('dragWord-' + id).classList.add('dNone');
//         document.getElementById('imgRes-' + id).classList.remove('dNone');
//
//         countWords(item);
//       }
//     },
//     collect: monitor => ({
//       isDragging: monitor.isDragging(),
//     }),
//   })
//
//   const opacity = isDragging ? 0.4 : 1
//
//   return (
//     <div className = { 'dragWord ' + group } ref = { drag } style = {{ ...style, opacity }} id = {'dragWord-' + id } >
//       <img alt = 'Imagen' className = '' src = { img }/>
//       <h5 className = 'tCenter' dangerouslySetInnerHTML = {{ __html: name }}></h5>
//     </div>
//   )
// }
//
// export default DragWord;
