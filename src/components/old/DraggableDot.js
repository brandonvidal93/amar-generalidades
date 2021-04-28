import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDDot/DropDot';
import DragWord from './subcomponents/DnDDot/DragDot';

import './DraggableDot.scss';

class DraggableWordBox extends Component {
  state = {
    page: 1,
    countData: 0,
    countNoData: 0
  }

  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('disabledGray3').length;

    if (cantidad === this.props.multimedia.dragItem.length) {
      this.props.handleClick(0);
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableDot d-Flex j-Bt aI-C'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
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

          <div className = 'contentWords d-Flex d-C j-C aI-S' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = 'd-Flex d-Rr j-S aI-C'>
                    <p className = 'labelDrag' dangerouslySetInnerHTML = {{ __html: item.text }}></p>
                    <DragWord
                      key = { item.id }
                      id = { item.id }
                      name = { item.text }
                      type = { item.text }
                      img = { item.img }
                      group = { item.type }
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
