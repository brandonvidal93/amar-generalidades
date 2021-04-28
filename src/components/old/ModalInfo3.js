import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo3.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class BackCover extends Component {
  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  showModal = () => {
    const { dataPage, showInfo, showModal } = this.props;
    // console.log(dataPage, showInfo,showModal);

    if (showModal === true) {
      return (
        <div className = 'modalInfo3 animated fadeIn'>
          <div className = 'bgCircle dF-R-cc showModal'>
            <div className = 'boxInfo pT-2 pB-2 pL-2 pR-2 d-Flex d-C j-C aI-C'>
              <img alt = 'Imagen' className = 'imageCenter mB-1' src = { dataPage[showInfo].img }/>
              <h2 className = 'mB-1 tCenter' dangerouslySetInnerHTML = {{ __html: dataPage[showInfo].title }}></h2>
              <p className = 'tCenter' dangerouslySetInnerHTML = { { __html: dataPage[showInfo].text1 } } />
              <button
                className = 'buttonClose'
                onClick = { this.hideModal }
                >
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  hideModal = () => {
    this.props.hideModal(false)
  }

  render() {
    return (
      this.showModal()
    );
  }
}

export default BackCover;
