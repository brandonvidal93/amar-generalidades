import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './MenuCourse.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class MenuCourse extends Component {
  state = {
    unitActual: this.props.unitActual,
    nextUnit: this.props.nextUnit,
    isMenuOpen: true
  }

  componentDidMount() {
    // console.log(this.state.unitActual); // UNIDAD ACTUAL

    for (var i = 0; i < 6; i++) {
      document.getElementsByClassName('buttonMenu')[i].classList.remove('animation');
      // console.log(document.getElementsByClassName('buttonMenu')[i]);

    }
    document.getElementById('btnUnit-' + this.state.nextUnit).classList.add('animation');
  }

  trackScrolling = (e) => {
    e.preventDefault();

    const CONTENTBOX = document.getElementById('itemsContent');

    if (e.currentTarget.id === 'btnNavUp') {
      CONTENTBOX.scrollTop = CONTENTBOX.scrollTop - 300;
    }

    if (e.currentTarget.id === 'btnNavDown') {
      CONTENTBOX.scrollTop = CONTENTBOX.scrollTop + 300;
    }
  }

  openCloseMenu = (e) => {
    e.preventDefault();

    this.setState({ isMenuOpen: !this.state.isMenuOpen });

    document.querySelector('.buttonOpen').classList.remove('animationOpenMenu');

    if (this.state.isMenuOpen) {
      document.getElementById('menuContent').style.left = '0px';
    } else {
      document.getElementById('menuContent').style.left = '-130px';
    }
  }

  onOverItemMenu = (e) => {
    const { dataPage } = this.props;

    e.preventDefault();

    let idUnit = parseInt(e.currentTarget.id.substring(8));

    // MOSTRAR EL FONDO
    setTimeout(() => {
      document.getElementById('infoUnit').style.display = 'flex';
    }, 100);

    // MOSTRAR TITULO
    setTimeout(() => {
      document.getElementById('infoUnit').innerHTML = '<h1 class = "blanco animated fadeInLeft">'+ dataPage.Units[idUnit - 1].title +'</h1>';
    }, 200);

    document.getElementById('btnNavDown').classList.remove('animationDownMenu');
  }

  onLeaveItemMenu = (e) => {
    e.preventDefault();

    //OCULTAR EL FONDO
    document.getElementById('infoUnit').style.display = 'none';
  }

  // FUNCION PARA IR A LA UNIDAD
  goToUnit = e => {
    const { dataPage, goToPage, updateActualUnit, updateNextUnit } = this.props;
    
    let numIdButton = e.currentTarget.id.substring(8);
    
    updateActualUnit(numIdButton);
    updateNextUnit(parseInt(numIdButton) + 1);
    
    this.setState({ nIdButton: parseInt(numIdButton) + 1 });
    
    switch (parseInt(numIdButton)) {
      case 1:
        goToPage(dataPage.Units[0].goTo);
        break;
      case 2:
        goToPage(dataPage.Units[1].goTo);
        break;
      case 3:
        goToPage(dataPage.Units[2].goTo);
        break;
      case 4:
        goToPage(dataPage.Units[3].goTo);
        break;
      case 5:
        goToPage(dataPage.Units[4].goTo);
        break;
      case 6:
        goToPage(dataPage.Units[5].goTo);
        break;
      default:
    }

    this.openCloseMenu(e);
  }

  render() {
    const { actualIndex, enableUnit, Units } = this.props;
    // const { Units, unitFinal, enableUnit, dataPage } = this.props;
    
    return (
      <div className = { (actualIndex === 0 || actualIndex === 34 ? 'menuContent-desc' : 'menuContent') } id = 'menuContent'>
        <button
          className = { 'buttonNav pAbs'}
          id = 'btnNavUp'
          onClick = { this.trackScrolling }>
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'arrow-up'] }
            size = 'lg' />
        </button>

        <div className = 'itemsContent' id = 'itemsContent'>
          {
            Units.map(unit =>
              <div
                className = { 'buttonTheme d-Flex j-C aI-C ' + (enableUnit[unit.unit - 1] === false ? 'disabledButton' : '') }
                key = { unit.unit }
                id = { 'btnBoxUnit-' + (unit.unit) } >

                <button
                  id = { 'btnUnit-' + (unit.unit) }
                  onClick = { this.goToUnit }
                  onMouseEnter = { this.onOverItemMenu }
                  onMouseLeave = { this.onLeaveItemMenu }
                  className = { 'btnStyle buttonMenu' } >
                  <img
                    alt="Imagen"
                    className=""
                    src={ unit.imgBnt }
                  />
                </button>

              </div>
            )
          }
        </div>

        <button
          className = { 'buttonNav pAbs ' + (enableUnit[Units.unit - 1] === 5 ? 'pulse' : '') }
          id = 'btnNavDown'
          onClick = { this.trackScrolling }>
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'arrow-down'] }
            size = 'lg' />
        </button>

        { /* INFORMACIÓN DEL TEMA */ }

        <div className = 'infoUnit pAbs d-Flex d-C j-C aI-S animated fadeIn' id = 'infoUnit'>

        </div>

        { /* BOTON PARA ABRIR Y CERRAR EL MENÚ */ }

        <button className = 'boxOpenButton pAbs' id = 'btnOpen' onClick = { this.openCloseMenu }>
          <div
            className = { 'buttonOpen' } >
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { this.state.isMenuOpen ? ['fas', 'arrow-right'] : ['fas', 'arrow-left'] }
              size = 'lg' />
          </div>
        </button>

      </div>
    );
  }
}

export default MenuCourse;
