import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class BackCover extends Component {
  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  showModal = () => {
    const { dataPage, showInfo, showModal } = this.props;
    // console.log(dataPage, showInfo,showModal);

    if (showModal === true) {
      return (
        <div className = 'modalCircle animated fadeIn'>
          <div className = 'bgCircle dF-R-cc showModal'>
            <div className = 'boxInfo pT-2 pB-2 pL-2 pR-2'>
              <h2 className = 'mB-1'>{ dataPage[showInfo].title }</h2>
              <p className = 'mB-1' dangerouslySetInnerHTML = { { __html: dataPage[showInfo].text1 } } />
              <p className = 'bg-color-6 pT-1 pB-1 pR-1 pL-1' dangerouslySetInnerHTML = { { __html: dataPage[showInfo].text2 } } />
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
