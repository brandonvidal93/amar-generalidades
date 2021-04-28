import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo4.scss';

library.add(fas, fab, far);

class ModalInfo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Act2: 1
    }
  }

  actividad2Handle = (event) => {
    let idSelect = event.target.id;
    let numId = idSelect.substring(7, 8);

    if (event.target.value === 'true') {
      document.getElementById('audioNotification').src = 'audio/check.mp3';
      document.getElementById('audioNotification').play();

      document.getElementById('select-' + numId + '-check-act2-Op-' + numId).classList.remove('dNone');
      document.getElementById('select-' + numId + '-error-act2-Op-' + numId).classList.add('dNone');
      document.getElementById('select-' + numId + '-icon-act2-Op-' + numId).classList.add('dNone');

      document.getElementById(event.target.id).classList.add('disabledSolid');

      this.setState({
        Act2: this.state.Act2 + 1
      });

      if (this.state.Act2 === 4) {
        this.isEnded();
      }

    } else {
      document.getElementById('audioNotification').src = 'audio/error.mp3';
      document.getElementById('audioNotification').play();
      
      document.getElementById('select-' + numId + '-error-act2-Op-' + numId).classList.remove('dNone');
      document.getElementById('select-' + numId + '-icon-act2-Op-' + numId).classList.add('dNone');
    }
  }

  isEnded = () => {
    this.props.isEnded(true);
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'modalInfo4 animated fadeIn d-Flex d-C'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />

        <div className = 'actividad2 mL-1 pB-1'>

          <div className = 'optionsBox'>
            {
              multimedia.actividad2.choices.map((choice, i) => {
                return(
                  <div className = 'option mB-05 d-Flex j-S aI-C' key = {i} id = {'act2-Op-' + (i + 1)}>

                    <span className = 'fa-layers icon mR-05' id = { 'select-' + (i + 1) + '-icon-act2-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle blanco' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check blanco' />
                    </span>
                    <span className = 'fa-layers iconCheck mR-05 dNone' id = { 'select-' + (i + 1) + '-check-act2-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check' />
                    </span>
                    <span className = 'fa-layers iconError mR-05 dNone' id = { 'select-' + (i + 1) + '-error-act2-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="times" inverse transform="shrink-6" className = 'check' />
                    </span>

                    <p className = 'labelStatement c-8 mR-1' dangerouslySetInnerHTML = {{ __html: choice.question }}></p>

                    <select className = 'select tCenter' name = { 'select-' + (i + 1) } id = { 'select-' + (i + 1) } onChange = { this.actividad2Handle } style = { { 'backgroundColor': choice.color } }>
                      {
                        choice.select.map((opt, i) => {
                          return(
                            <option className = 'selectOption' key = {i} value = { opt.value } dangerouslySetInnerHTML = {{ __html: opt.option }} ></option>
                          )
                        })
                      }
                    </select>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ModalInfo4;
