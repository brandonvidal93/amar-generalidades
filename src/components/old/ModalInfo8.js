import React, { Component } from 'react';
// import DraggableDot2 from './DraggableDot2/DraggableDot';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo8.scss';

library.add(fas, fab, far);

class ModalInfo8 extends Component {
  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone');
  }

  // <DraggableDot2 multimedia = { dataPage.multimedia } isEnded = { this.props.isEnded } />

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    this.props.isEnded(true);
    this.props.showModal();
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'ModalInfo8 animated fadeIn'>
        <div className = 'showModal d-Flex j-C aI-C'>

          <img
            alt = 'Imagen'
            className = ''
            src = { dataPage.boxInfo.imgInfo }/>

          { dataPage.modal.closedModal === true ?
            <button
              className = 'buttonClose'
              onClick = { this.hideModal }
              >
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
              </span>
            </button> : null
          }
        </div>
      </div>
    );
  }
}

export default ModalInfo8;
