import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDDocument/DropLabel';
import DragWord from './subcomponents/DnDDocument/DragLabel';

// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableDocument.scss';

// library.add(fas, fab, far);

class DraggableWordBox extends Component {
  state = {
    count: 0
  }

  countWords = () => {
    let parent = document.getElementById('contentDrop');
    let cantidad = parent.getElementsByClassName('itemDrop').length;
    // console.log('Cantidad de zona Drop: ' + cantidad);

    this.setState({
      count: this.state.count + 1
    })

    // console.log(this.state.count);

    this.state.count === cantidad ? this.props.isEnded(true) : console.log('No ha finalizado');

    // if (this.state.count === cantidad) {
    //   console.log('End');
    //   this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    // }
  }
  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableDocument d-Flex j-Bt aI-S'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentDrop' id = 'contentDrop'>
            {
              multimedia.dropZone.drops.map((item, i) => {
                return(
                  <div key = { item.key } className = 'itemDrop mB-025 d-Flex d-R j-E aI-C'>
                    <h4 className = {'animated fadeIn textItem dNone'} dangerouslySetInnerHTML = {{ __html: '0' + item.key }} style = {{ 'backgroundColor': item.color }} id = { 'numberDrop-' + item.key } />
                    <DropWord id = { item.key } type = { item.type } text = { item.text } />
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentWords d-Flex d-R j-C aI-S wW' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = 'd-Flex d-R j-S aI-C'>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      name = { item.text }
                      type = { item.text }
                      img = { item.img }
                      countWords = { this.countWords }
                      colorBg = { item.color }/>
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

export default DraggableWordBox;
