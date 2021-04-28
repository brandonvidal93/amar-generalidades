import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './DropLabel';
import DragWord from './DragLabel';

import './DraggableIcon.scss';

class DraggableIcon extends Component {
  state = {
    count: 0
  }

  countWords = () => {
    const { multimedia } = this.props;
    let cantidad = multimedia.dragItem.length;
    // console.log('Cantidad de zona Drop: ' + cantidad);

    this.setState({
      count: this.state.count + 1
    })

    // console.log(this.state.count);

    this.state.count === cantidad ? this.props.isEnded(true) : console.log('No ha finalizado');
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableIcon d-Flex d-C j-Bt aI-S'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentDrop d-Flex j-S aI-C mB-2' id = 'contentDrop'>
            {
              multimedia.dropZone.drops.map((item, i) => {
                return(
                  <div key = { item.key } className = 'itemDrop mL-3 mR-2 d-Flex d-R j-S aI-C'>
                    <DropWord id = { item.key } type = { item.type } text = { item.text } />
                  </div>
                )
              })
            }
            <div className = 'boxDropText d-Flex j-S aI-C' id = {'textDrop'}></div>
          </div>

          <div className = 'contentWords d-Flex d-R j-C aI-S wW' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = 'd-Flex d-R j-S aI-C'>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      text = { item.text }
                      type = { item.type }
                      img = { item.img }
                      countWords = { this.countWords } />
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

export default DraggableIcon;
