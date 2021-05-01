import React, {Component} from 'react';
// import { DndProvider } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
// import DropWord from './subcomponents/DnDFV/DropFV';
// import DragWord from './subcomponents/DnDFV/DragFV';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './SlideUpDown.scss';

library.add(fas, fab, far);

class SlideUpDown extends Component {
  state = {
    page: 1
  }

  mSlides = e => {
    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        page: this.state.page - 1
      });
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        page: this.state.page + 1
      });

      if (this.state.page === this.props.multimedia.items.length - 1) {
        this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
      }
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'SlideUpDown d-Flex j-S aI-S'>
        <div className = 'contentSlide d-Flex j-C aI-C' id = 'contentSlide'>
          {
            multimedia.items.map( (item, i) => {
              return(
                <div key = { i + 1 } id = { 'slideBox-' + (i + 1) } className = {'slideBox d-Flex d-C j-C aI-C animated fadeIn ' + ((i + 1) !== this.state.page ? 'dNone' : '')}>
                  {
                    item.img ? <img alt = 'Imagen' className = '' src = { item.img }/> : null
                  }
                  {
                    item.text ? <p className = 'text pAbs' dangerouslySetInnerHTML = {{ __html: item.text }} style = {{ 'top': item.textPos.posY, 'left': item.textPos.posX, 'width': item.textPos.width }} /> : null
                  }
                </div>
              )
            })
          }
          <div className = 'contentButton mL-1 d-Flex d-C j-C aI-C'>
            <button className = { 'buttonSlide mB-025 ' + (this.state.page === 1 ? 'disabled' : '') } id = 'btnAnt' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="arrow-up" inverse transform="shrink-6" />
              </span>
            </button>
            <button className = { 'buttonSlide mT-025 ' + (this.state.page === multimedia.items.length ? 'disabled' : '') } id = 'btnSig' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="arrow-down" inverse transform="shrink-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideUpDown;
