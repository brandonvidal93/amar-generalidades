import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDWordBox/DropWordBox';
import DragWord from './subcomponents/DnDWordBox/DragWordBox';

import './DraggableWordBox.scss';

class DraggableWordBox extends Component {
  state = {
    page: 1,
    countData: 0,
    countNoData: 0
  }

  countWords = (item) => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('dNone').length;

    let data = parent.getElementsByClassName('data').length;
    let noData = parent.getElementsByClassName('noData').length;

    if (item.group === 'data') {
      this.setState({
        countData: this.state.countData + 1
      })
      console.log('Conteo data: ' + this.state.countData);
      if (this.state.countData === data) {
        this.props.handleClick(0);
      }
    }

    if (item.group === 'noData') {
      this.setState({
        countNoData: this.state.countNoData + 1
      })
      console.log('Conteo noData: ' + this.state.countNoData);
      if (this.state.countNoData === noData) {
        this.props.handleClick(1);
      }
    }

    if (cantidad === this.props.multimedia.dragItem.length) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableWordBox'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />

        <div className = 'd-Flex j-Bt aI-C mL-5 pL-7 pR-5'>
          {
            multimedia.dropZone.paragraph[0].lines.map((item, i) => {
              return(
                <h3 dangerouslySetInnerHTML = {{ __html: item.text }} key = { item.key }></h3>
              )
            })
          }
        </div>
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentSlide dF-R-cc mB-025'>
            {
              multimedia.dropZone.paragraph.map( (item, i) => {
                return(
                  <div key = { item.key } className = {'slideBox animated fadeIn ' + (item.key !== this.state.page ? 'dNone' : '')}>
                    {
                      item.drops.map( (boxDrop, i) => {
                        return(
                          // console.log(boxDrop.text)
                          <DropWord
                            key = { boxDrop.key }
                            id = { boxDrop.key }
                            size = { boxDrop.size }
                            posY = { boxDrop.posY }
                            posX = { boxDrop.posX }
                            type = { boxDrop.type }
                            img = { boxDrop.img }
                            imgRes = { boxDrop.imgRes.source }
                            imgResY = { boxDrop.imgRes.posY }
                            imgResX = { boxDrop.imgRes.posX }
                            imgResId = { boxDrop.imgRes.idRes }
                            colorBorder = { multimedia.dropZone.colors[i] } />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentWords' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <DragWord
                    key = { item.id }
                    id = { item.id }
                    name = { item.text }
                    type = { item.type }
                    img = { item.img }
                    group = { item.type }
                    countWords = { this.countWords }
                    colorBg = { item.color }/>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableWordBox;


// import React, {Component} from 'react';
// import { DndProvider } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
// import DropWord from './subcomponents/DnDWordBox/DropWordBox';
// import DragWord from './subcomponents/DnDWordBox/DragWordBox';
//
// // import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
//
// // IMPORT FONT AWESOME LIBRARY
// // import { library } from '@fortawesome/fontawesome-svg-core';
// // import { fas } from '@fortawesome/free-solid-svg-icons';
// // import { fab } from '@fortawesome/free-brands-svg-icons';
// // import { far } from '@fortawesome/free-regular-svg-icons';
//
// import './DraggableWordBox.scss';
//
// // library.add(fas, fab, far);
//
// class DraggableWordBox extends Component {
//   state = {
//     page: 1,
//     countData: 0,
//     countNoData: 0
//   }
//
//   countWords = (item) => {
//     // console.log(typeof item.group);
//     let parent = document.getElementById('contentWords');
//     let cantidad = parent.getElementsByClassName('dNone').length;
//
//     let data = parent.getElementsByClassName('data').length;
//     let noData = parent.getElementsByClassName('noData').length;
//
//     if (item.group === 'data') {
//       this.setState({
//         countData: this.state.countData + 1
//       })
//       console.log('Conteo data: ' + this.state.countData);
//       if (this.state.countData === data) {
//         this.props.handleClick(0);
//       }
//     }
//
//     if (item.group === 'noData') {
//       this.setState({
//         countNoData: this.state.countNoData + 1
//       })
//       console.log('Conteo noData: ' + this.state.countNoData);
//       if (this.state.countNoData === noData) {
//         this.props.handleClick(1);
//       }
//     }
//
//     if (cantidad === this.props.multimedia.dragItem.length) {
//       this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
//     }
//   }
//
//   render() {
//     const { multimedia } = this.props;
//     return (
//       <div className = 'draggableWordBox'>
//         <div className = 'd-Flex j-Bt aI-C mL-5 pL-7 pR-5'>
//           {
//             multimedia.dropZone.paragraph[0].lines.map((item, i) => {
//               return(
//                 <h3 dangerouslySetInnerHTML = {{ __html: item.text }} key = { item.key }></h3>
//               )
//             })
//           }
//         </div>
//         <DndProvider backend = { HTML5Backend }>
//           <div className = 'contentSlide dF-R-cc mB-025'>
//             {
//               multimedia.dropZone.paragraph.map( (item, i) => {
//                 return(
//                   <div key = { item.key } className = {'slideBox animated fadeIn ' + (item.key !== this.state.page ? 'dNone' : '')}>
//                     {
//                       item.drops.map( (boxDrop, i) => {
//                         return(
//                           // console.log(boxDrop.text)
//                           <DropWord
//                             key = { boxDrop.key }
//                             id = { boxDrop.key }
//                             size = { boxDrop.size }
//                             posY = { boxDrop.posY }
//                             posX = { boxDrop.posX }
//                             type = { boxDrop.type }
//                             img = { boxDrop.img }
//                             imgRes = { boxDrop.imgRes.source }
//                             imgResY = { boxDrop.imgRes.posY }
//                             imgResX = { boxDrop.imgRes.posX }
//                             imgResId = { boxDrop.imgRes.idRes }
//                             colorBorder = { multimedia.dropZone.colors[i] } />
//                         )
//                       })
//                     }
//                   </div>
//                 )
//               })
//             }
//           </div>
//
//           <div className = 'contentWords' id = 'contentWords' >
//             {
//               multimedia.dragItem.map( (item, i) => {
//                 return(
//                   <DragWord
//                     key = { item.id }
//                     id = { item.id }
//                     name = { item.text }
//                     type = { item.type }
//                     img = { item.img }
//                     group = { item.type }
//                     countWords = { this.countWords }
//                     colorBg = { item.color }/>
//                 )
//               })
//             }
//           </div>
//         </DndProvider>
//       </div>
//     );
//   }
// }
//
// export default DraggableWordBox;
