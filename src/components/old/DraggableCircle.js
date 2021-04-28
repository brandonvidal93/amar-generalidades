import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './subcomponents/DnD/BoxDrop';
import DragItem from './subcomponents/DnD/DragItem';
// import ModalInfo from './ModalInfo2';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableCircle.scss';

library.add(fas, fab, far);

class DraggableCircle extends Component {
  state = {
    showItem: false,
    actualItem: 0,
    showModal: false,
    showInfo: 0
  }

  hideModal = (e) => {

    document.getElementById('infoDrop-' + (this.state.actualItem + 1)).classList.add('dNone');
  }

  countDrag = () => {
    this.setState({
      actualItem: this.state.actualItem + 1
    });

    if (this.state.actualItem === 5) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  hideModalFinal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
    document.querySelector('.footer').classList.remove('dNone');
  }
  render() {
    const { multimedia } = this.props;
    // console.log(this.state);
    return (
      <div className = 'draggableCircle'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        <DndProvider backend={HTML5Backend}>
          <div>
            {
              multimedia.dragItems.map( (item, i) => {
                return(
                  <div key = { item.drag } className = { this.state.actualItem + 1 !== item.drag ? 'disabledGray' : '' }>
                    <DragItem
                      id = { item.drag }
                      name = { item.data }
                      path = { item.img }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type }
                      countDrag = { this.countDrag } />

                    {/*<div className = 'dragBg' style = { { 'top': item.posY, 'left': item.posX } }>
                      <img
                        alt = 'Drag'
                        className = ''
                        src = { item.img } />
                    </div>*/}
                  </div>
                )
              })
            }
          </div>
          <div >
            {
              multimedia.dropZone.map( (item, i) => {
                return(
                  <div  key = { item.drop }>
                    <BoxDrop
                      data ={ item.data }
                      path = { item.img }
                      pathTarget = { item.imgTarget }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />

                    <div
                      className = { 'infoGloble dF-C-cs animated dNone triang-der fadeInLeft' }
                      id = { 'infoDrop-' + (this.state.actualItem + 1) } style = {{ 'top': item.infoBox[this.state.actualItem].posY, 'left': item.infoBox[this.state.actualItem].posX }}>

                      <h1 className = 'F3 mB-05 titleCircle tCenter' style = {{ 'color': item.infoBox[this.state.actualItem].colorTitle }} ><i>{ item.infoBox[this.state.actualItem].title }</i></h1>
                      <hr className = 'c-10 mB-1'></hr>
                      <h3 className = 'mB-1' dangerouslySetInnerHTML = { {__html: item.infoBox[this.state.actualItem].subTitle} }/>
                      <p className = 'mB-1' dangerouslySetInnerHTML = { {__html: item.infoBox[this.state.actualItem].text} }/>
                      {
                        item.infoBox[this.state.actualItem].text2 ? <p className = 'bg-color-6 pT-1 pB-1 pR-1 pL-1' dangerouslySetInnerHTML = { {__html: item.infoBox[this.state.actualItem].text2} }/> : null
                      }
                      {
                        item.infoBox[this.state.actualItem].text3 ? <p className = 'bg-color-6 pT-1 pB-1 pR-1 pL-1' dangerouslySetInnerHTML = { {__html: item.infoBox[this.state.actualItem].text3} }/> : null
                      }

                      <button
                        className = 'buttonClose'
                        onClick = { this.hideModal }
                        id = { item.drop }
                        >
                        <span className = 'fa-layers fa-fw iconButton' >
                          <FontAwesomeIcon icon="circle" />
                          <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                        </span>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableCircle;
