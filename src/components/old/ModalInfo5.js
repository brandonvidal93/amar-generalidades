import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import ChatPhone from './ChatPhone';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo5.scss';

library.add(fas, fab, far);

class ModalInfo5 extends Component {
  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone');
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    this.props.showModal();
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'ModalInfo5 animated fadeIn'>
        <div className = 'showModal'>

          <ChatPhone dataPage = { dataPage } isEnded = { this.props.isEnded } ></ChatPhone>

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

export default ModalInfo5;
