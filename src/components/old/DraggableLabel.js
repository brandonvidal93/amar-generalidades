import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDLabel/DropLabel';
import DragWord from './subcomponents/DnDLabel/DragLabel';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableLabel.scss';

library.add(fas, fab, far);

class DraggableWordBox extends Component {
  state = {
    page: 1,
    countPub: 0,
    countSen: 0,
    countSemi: 0,
    countBio: 0,
    Pub: 2,
    Sen: 2,
    Semi: 3,
    Bio: 1,
    regPub: 2,
    regSen: 2,
    regSemi: 3,
    regBio: 1
  }

  countWords = (item) => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('disabledGray3').length;
    console.log(cantidad);

    if (item.group === 'Público') {
      this.setState({
        countPub: this.state.countPub + 1,
        regPub: this.state.regPub - 1
      })
      // console.log('Conteo: ' + this.state.countPub);
      if (this.state.countPub === this.state.Pub) {
        document.getElementById('dragWord-' + item.id).classList.add('disabledGray3');
      }
    }

    if (item.group === 'Sensible') {
      this.setState({
        countSen: this.state.countSen + 1,
        regSen: this.state.regSen - 1
      })
      // console.log('Conteo: ' + this.state.countSen);
      if (this.state.countSen === this.state.Sen) {
        document.getElementById('dragWord-' + item.id).classList.add('disabledGray3');
      }
    }

    if (item.group === 'Semiprivado') {
      this.setState({
        countSemi: this.state.countSemi + 1,
        regSemi: this.state.regSemi - 1
      })
      // console.log('Conteo: ' + this.state.countSemi);
      if (this.state.countSemi === this.state.Semi) {
        document.getElementById('dragWord-' + item.id).classList.add('disabledGray3');
      }
    }

    if (item.group === 'Biométrico') {
      this.setState({
        countBio: this.state.countBio + 1,
        regBio: this.state.regBio - 1
      })
      // console.log('Conteo: ' + this.state.countBio);
      if (this.state.countBio === this.state.Bio) {
        document.getElementById('dragWord-' + item.id).classList.add('disabledGray3');
      }
    }

    if (cantidad === 3) {
      console.log('End');
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  regCount = (type) => {
    switch (type) {
      case 'Público':
        return(
          <p className = '' dangerouslySetInnerHTML = {{ __html: this.state.regPub }}></p>
        )
      case 'Sensible':
        return(
          <p className = '' dangerouslySetInnerHTML = {{ __html: this.state.regSen }}></p>
        )
      case 'Semiprivado':
        return(
          <p className = '' dangerouslySetInnerHTML = {{ __html: this.state.regSemi }}></p>
        )
      case 'Biométrico':
        return(
          <p className = '' dangerouslySetInnerHTML = {{ __html: this.state.regBio }}></p>
        )
      default:
       break;
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableLabel d-Flex j-Bt aI-C'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />
        
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentDrop'>
            {
              multimedia.dropZone.drops.map((item, i) => {
                return(
                  <div key = { item.key } className = 'itemDrop mB-05 d-Flex d-R j-C aI-C'>
                    <span className = 'fa-layers icon mR-1 disabledGray4' id = { 'check-' + item.id }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check' />
                    </span>
                    <p className = 'dropLabel mR-1' dangerouslySetInnerHTML = {{ __html: item.text }}></p>
                    <DropWord id = { item.key } type = { item.type } groupId = { item.id } />
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentWords d-Flex d-C j-C aI-S' id = 'contentWords' >
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
                      group = { item.type }
                      countWords = { this.countWords }
                      colorBg = { item.color }/>
                    <div className = 'countLabel mL-025 d-Flex j-C aI-C'>
                      {
                        this.regCount(item.text)
                      }
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

export default DraggableWordBox;
