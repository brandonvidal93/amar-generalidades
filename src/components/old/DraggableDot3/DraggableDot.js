import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './DropDot';
import DragWord from './DragDot';

// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableDot.scss';

// library.add(fas, fab, far);

class DraggableDot extends Component {
  state = {
    page: 1,
    countData: 0,
    countNoData: 0
  }

  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('dNone').length;

    if (cantidad === this.props.multimedia.dragItem.length) {
      // console.log('Final');
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableDot3 d-Flex j-Bt aI-C'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentWords mR-05' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = ''>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      name = { item.text }
                      type = { item.type }
                      group = { item.type }
                      countWords = { this.countWords }
                      colorBg = { item.color }
                      posY = { item.posY }
                      posX = { item.posX } />
                  </div>
                )
              })
            }
          </div>

          <div className = {'slideBox animated fadeIn'}>
            {
              multimedia.dropZone.drops.map( (boxDrop, i) => {
                return(
                  <div key = { boxDrop.key } className = 'mB-05 d-Flex j-S aI-C'>
                    <DropWord
                      id = { boxDrop.key }
                      type = { boxDrop.type } />
                    <p className = 'labelDrop' dangerouslySetInnerHTML = {{ __html: boxDrop.text }} />
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

export default DraggableDot;
