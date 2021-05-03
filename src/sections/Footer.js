import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Footer extends Component {

  // ENVIO DE ID PARA NAVEGAR EL CURSO
  navigationCourse = e => {
    const { actualIndex } = this.props;
    e.preventDefault();
    if (e.target.id === 'btnNavRight') {
      console.log(actualIndex);

      document.getElementById('btnNavRight').classList.remove('animationBtnNav');

      this.props.clickNavigation(e.target.id);
    } else {
      this.props.clickNavigation(e.target.id);
    }

    // if (e.target.id === 'btnNavRight') {
    //   console.log(actualIndex);
    //   switch (actualIndex) {
    //     case 10:
    //       this.props.clickNavigation(2);
    //       break;
    //     case 13:
    //       this.props.clickNavigation(2);
    //       break;
    //     case 20:
    //       this.props.clickNavigation(2);
    //       break;
    //     case 22:
    //       this.props.clickNavigation(2);
    //       break;
    //     case 25:
    //       this.props.clickNavigation(2);
    //       break;
    //     default:
    //       this.props.clickNavigation(e.target.id);
    //       break;
    //   }
    // } else {
    //   this.props.clickNavigation(e.target.id);
    //   // console.log('Ultima página');
    // }
  }

  // MOSTRAR EL LOGO CUANDO NO ESTÁ EN LA PÁGINA 1
  showLogo = () => {
    const { actualIndex, imageFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <img
          alt='Imagen Corporativa'
          className='imageFooter'
          src={ imageFooter }/>
      );
    } else {
      return null;
    }
  }

  // MOSTRAR EL MENU DE NAVEGACIÓN Y BLOQUEAR LOS BOTONES DEPENDIENDO DE LA PAGINA
  showNavigation = () => {
    const { actualIndex, limitNavigation, data } = this.props;

    if (actualIndex !== 0) {
      return(
        <div className = 'buttonPannel'>
          <button
            className = { 'buttonNav ' + (actualIndex === 1 || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
            id = 'btnNavLeft'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'arrow-left'] }
              size = '2x' />
          </button>

          <button
            className = { 'buttonNav ' + (actualIndex === limitNavigation || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') + (actualIndex === 1 || actualIndex === 2 || actualIndex === 6 || actualIndex === 15 || actualIndex === 17 || actualIndex === 28 || actualIndex === 31 || actualIndex === 32 || actualIndex === 33 ? 'disabled ': '') }
            id = 'btnNavRight'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'arrow-right'] }
              size = '2x' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  showLabel = () => {
    const { actualIndex, labelFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <h3 className = 'labelFooter fw-7' dangerouslySetInnerHTML = {{ __html: labelFooter }}></h3>
      );
    }
  }

  showPage = () => {
    const { actualIndex } = this.props;
    if (actualIndex !== 0) {
      return(
        <h1 className = 'numberPage fw-3'>{ ((actualIndex) <= 9 ? '0' + (actualIndex) : (actualIndex)) }</h1>
      );
    }
  }

  // { this.showPage() }

  render() {
    const { actualIndex, endActivities } = this.props;
    // console.log(endActivities);

    return (
      <div className = { (actualIndex === 0 || actualIndex === 34 ? 'footer-desc' : 'footer') + ' d-Flex j-S aI-C' }>

        { this.showLogo() }
        { this.showLabel() }
        { this.showNavigation() }
        <div className = { 'restrict ' + ((endActivities[actualIndex]) === true ? 'dNone' : '') } />
      </div>
    );
  }
}

export default Footer;
