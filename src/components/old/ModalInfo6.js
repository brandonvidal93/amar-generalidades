import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo6.scss';

library.add(fas, fab, far);

class ModalInfo6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishExam: false,
      countAct: 1
    }
  }

  // componentDidMount(event) {
  //   document.querySelector('.footer').classList.add('dNone');
  // }

  actividadHandle = (event) => {
    let idSelect = event.target.id;
    let numId = idSelect.substring(7, 8);

    console.log(document.getElementById(event.target.id).getAttribute('value'));

    if (document.getElementById(event.target.id).getAttribute('value') === 'true') {

      document.getElementById('audioNotification').src = 'audio/check.mp3';
      document.getElementById('audioNotification').play();

      document.getElementById('option-' + numId + '-check-act-Op-' + numId).classList.add('validate');
      for (var i = 0; i < 7; i++) {
        if (!document.getElementsByClassName('iCheck')[i].classList.contains('validate')) {
          document.getElementsByClassName('iconAct')[i].classList.remove('dNone');
          document.getElementsByClassName('iCheck')[i].classList.add('dNone');
          document.getElementsByClassName('iError')[i].classList.add('dNone');
        }
      }

      document.getElementById('option-' + numId + '-check-act-Op-' + numId).classList.remove('dNone');
      document.getElementById('option-' + numId + '-icon-act-Op-' + numId).classList.add('dNone');

      this.setState({ countAct: this.state.countAct + 1 });
      console.log(this.state.countAct);

      if (this.state.countAct === 6) {
        document.getElementById('act-1').classList.add('disabledSolid2');
        this.isEnded();
      }

    } else {

      document.getElementById('audioNotification').src = 'audio/error.mp3';
      document.getElementById('audioNotification').play();

      for (var j = 0; j < 7; j++) {
        if (!document.getElementsByClassName('iCheck')[j].classList.contains('validate')) {
          document.getElementsByClassName('iconAct')[j].classList.remove('dNone');
          document.getElementsByClassName('iCheck')[j].classList.add('dNone');
          document.getElementsByClassName('iError')[j].classList.add('dNone');
        }
      }

      document.getElementById('option-' + numId + '-error-act-Op-' + numId).classList.remove('dNone');
      document.getElementById('option-' + numId + '-icon-act-Op-' + numId).classList.add('dNone');
    }
  }

  isEnded = () => {
    this.setState({ finishExam: true })
    this.props.isEnded(true);
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    // document.querySelector('.footer').classList.remove('dNone');
    this.props.showModal();
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'modalInfo6 animated fadeIn d-Flex d-C'>
        <audio
          className = 'audio'
          autoPlay = { '' }
          id = 'audioNotification'
          src = { '' }
          ref = { (audio) => { this.audio = audio } } />

        <div className = 'actividad3 mL-3 mT-1' id = 'actividad3'>
          <div className = 'mB-1'>
            <h3 className = 'mB-05 mL-1 tCenter' dangerouslySetInnerHTML = {{ __html: multimedia.actividad.statement.text1 }}></h3>
            <p className = 'mB-2 mL-1' dangerouslySetInnerHTML = {{ __html: multimedia.actividad.statement.text2 }}></p>
            <h4 className = 'labelStatement c-9' dangerouslySetInnerHTML = {{ __html: multimedia.actividad.statement.text3 }}></h4>
          </div>
          <div className = 'optionsBox c-10' id = 'act-1'>
            {
              multimedia.actividad.choices.map((choice, i) => {
                return(
                  <div className = 'option mB-05 d-Flex j-S aI-C' key = {i} id = {'act-Op-' + (i + 1)}>
                    <span className = 'fa-layers icon iconAct mR-05' id = { 'option-' + (i + 1) + '-icon-act-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle blanco' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check color-6' />
                    </span>
                    <span className = 'fa-layers iconCheck iCheck mR-05 dNone' id = { 'option-' + (i + 1) + '-check-act-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="check" inverse transform="shrink-6" className = 'check' />
                    </span>
                    <span className = 'fa-layers iconError iError mR-05 dNone' id = { 'option-' + (i + 1) + '-error-act-Op-' + (i + 1) }>
                      <FontAwesomeIcon icon="circle" className = 'circle' />
                      <FontAwesomeIcon icon="times" inverse transform="shrink-6" className = 'check' />
                    </span>

                    <p className = 'labelStatement optionAct3 c-9 mR-1' id = { 'option-' + (i + 1) } value = { choice.value } dangerouslySetInnerHTML = {{ __html: choice.option }} onClick = { this.actividadHandle }></p>
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

export default ModalInfo6;

// {
//   this.state.finishExam === true ?
//   <div className = 'finishBox labelStatement c-3 d-Flex d-C j-C aI-C animated fadeIn'>
//     <img alt = 'Imagen' className = 'mB-05' src = { multimedia.finishBox.img }/>
//     <h2 className = 'mB-025' dangerouslySetInnerHTML = {{ __html: multimedia.finishBox.title }}></h2>
//     <p className = 'tCenter mB-025' dangerouslySetInnerHTML = {{ __html: multimedia.finishBox.text }}></p>
//     <button className = 'buttonClose' onClick = { this.hideModal } >
//       <span className = 'fa-layers fa-fw iconButton' >
//         <FontAwesomeIcon icon="circle" />
//         <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
//       </span>
//     </button>
//   </div> : null
// }
