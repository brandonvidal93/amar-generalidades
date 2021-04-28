import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveCircle.scss';

library.add(fas, fab, far);

class InteractiveCircle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.multimediaCircular.map( (item, i) => {
      return(
        <div className = 'circleItems' key = { i } style = { { 'top': item.pos.top, 'left': item.pos.left } }>
          <button className = { 'circleButton ' + ( i + 1 !== 1 ? 'disabledGray2' : '')} id = { i + 1 } onClick = { this.enableItem }>
            <img alt = '' className = '' id = { i + 1 } src = { item.urlImgBtn }/>
          </button>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimediaCircular } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.target.id;
    let idItem = parseInt(IDITEM);
    console.log(e.target);

    document.getElementById(idItem).classList.add('visited');

    if (idItem <= multimediaCircular.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });
        if (idItem !== multimediaCircular.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabledGray2');
          this.setState({ countItem: this.state.countItem + 1 });
        } else {
          this.setState({ countItem: this.state.countItem + 1 });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }


    }

    if (this.state.countItem === multimediaCircular.length) {
      this.setState({ countItem: multimediaCircular.length });

    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER style = {{ 'marginTop': 40, 'marginLeft': -480 }}
  hideModal = () => { this.showGlobe(); }

  render() {
    const { multimediaCircular } = this.props.dataPage;
    const { actualItem } = this.state;
    // console.log(this.state.countItem);
    return (
      <div className = 'interactiveCircle bgHexagon'>
        {
          // MOSTRAR LOS GLOBOS DE TEXTO
          this.state.openGlobe !== false ?
          <div className = 'bgItemGlobe'>
            <div
              className = { 'itemGlobe animated dF-C-cs ' + multimediaCircular[actualItem - 1].itemInfo.posTriang + ' fadeInDown'}
              style = { { 'width': multimediaCircular[actualItem - 1].itemInfo.posGlobe.size, 'top': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posY, 'left': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posX, 'borderColor': multimediaCircular[actualItem - 1].itemInfo.colorBorder } }>

              <p className = 'mB-05'><b>{ multimediaCircular[actualItem - 1].itemInfo.title }</b></p>

              <p className = 'mB-05' dangerouslySetInnerHTML = { { __html: multimediaCircular[actualItem - 1].itemInfo.text } } />

              { multimediaCircular[actualItem - 1].itemInfo.buttonClose.closedModal === true ?
                <button
                  className = 'buttonClose'
                  onClick = { this.hideModal }
                  style = { { 'top': multimediaCircular[actualItem - 1].itemInfo.buttonClose.posY, 'left': (multimediaCircular[actualItem - 1].itemInfo.buttonClose.posX + '%') } }
                  >
                  <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon icon="circle" />
                    <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                  </span>
                </button> : null
              }
            </div>
          </div> : null
        }

        { this.showItems() }
      </div>
    );
  }
}

export default InteractiveCircle;
