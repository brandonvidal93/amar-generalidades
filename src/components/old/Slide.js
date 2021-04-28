import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Slide.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Slide extends Component {
  trackScrolling = (e) => {
    const { isEnded } = this.props;

    e.preventDefault();

    const SLIDEBOX = document.getElementById('slideBox');

    if (e.currentTarget.id === 'btnNavLeft') {
      SLIDEBOX.scrollLeft = SLIDEBOX.scrollLeft - 250;

      document.getElementById('btnNavRight').classList.remove('disabledGray3');

      if (SLIDEBOX.scrollLeft <= 250) {
        document.getElementById('btnNavLeft').classList.add('disabledGray3');
      }
    }

    if (e.currentTarget.id === 'btnNavRight') {
      SLIDEBOX.scrollLeft = SLIDEBOX.scrollLeft + 250;

      document.getElementById('btnNavLeft').classList.remove('disabledGray3');

      if (SLIDEBOX.scrollLeft >= SLIDEBOX.offsetWidth) {
        document.getElementById('btnNavRight').classList.add('disabledGray3');
        isEnded(true);
        console.log('Fin');
      }
    }
  }

  render() {
    const { multimedia } = this.props;

    return (
      <div className = 'slideMultimedia d-Flex j-C aI-C'>
        <button
          className = { 'buttonNav mB-7 disabledGray3'}
          id = 'btnNavLeft'
          onClick = { this.trackScrolling }>
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'arrow-left'] }
            size = '2x' />
        </button>
        <div className = 'slideBox d-Flex j-S aI-S mR-3 mL-2'  id = 'slideBox'>
          {
            multimedia.items.map((item, i) => {
              return(
                <div className = 'itemSlide d-Flex d-C j-C aI-C' key = { i }>
                  <img alt = 'Imagen' className = '' src = { item.img }/>
                  <p className = 'tCenter' dangerouslySetInnerHTML = {{ __html: item.text }} />
                </div>
              )
            })
          }
        </div>
        <button
          className = { 'buttonNav mB-7' }
          id = 'btnNavRight'
          onClick = { this.trackScrolling }>
          <FontAwesomeIcon
            className = 'iconButton'
            icon = { ['fas', 'arrow-right'] }
            size = '2x' />
        </button>
      </div>
    );
  }
}

export default Slide;
