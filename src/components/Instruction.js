import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Instruction.scss';

library.add(fas, fab, far);

class Instruction extends Component {
  showInstruction = () => {
    const { dataPage } = this.props;

    // console.log(dataPage.type);
    switch (dataPage.type) {
      case 'mouse':
        return(
          <div className='instructionMouse instruction d-Flex j-S aI-C' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <span className = 'fa-layers icon mR-025' >
                <FontAwesomeIcon icon="circle" style = { {'color': dataPage.color} } />
                <FontAwesomeIcon icon="mouse-pointer" inverse transform="shrink-6" className = 'color-23' />
              </span>
            </div>
            <div className = 'mT-025 mB-025'>
              <h5 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
            </div>
          </div>
        );
      default:
        return(
          <div className='instructionInfo instruction d-Flex j-S aI-C' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <span className = 'fa-layers icon mR-025' >
                <FontAwesomeIcon icon="circle" style = { {'color': dataPage.color} } />
                <FontAwesomeIcon icon="info" inverse transform="shrink-6" />
              </span>
            </div>
            <div className = 'mT-025 mB-025'>
              <h5 className = 'fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
            </div>
          </div>
        );
    }
  }

  render() {
    // const { dataPage } = this.props;
    // console.log(dataPage);
    return (
      this.showInstruction()
    );
  }
}

export default Instruction;

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
//
// // IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
//
// import './Instruction.scss';
//
// library.add(fas, fab, far);
//
// class Instruction extends Component {
//   render() {
//     const { dataPage } = this.props;
//     // console.log(dataPage);
//     return (
//       <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
//         <div>
//           {
//             switch (dataPage.type) {
//               case expression:
//
//                 break;
//               default:
//
//             }
//             dataPage.type !== 'print' ?
//              <span className = 'fa-layers icon mR-05' >
//               <FontAwesomeIcon icon="square" />
//               <FontAwesomeIcon icon="info" inverse transform="shrink-6" />
//             </span>:
//             <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer'>
//               <span className = 'fa-layers icon mR-05' >
//                 <FontAwesomeIcon icon="square" />
//                 <FontAwesomeIcon icon="file-pdf" inverse transform="shrink-6" />
//               </span>
//             </a>
//           }
//         </div>
//         <div>
//           <h5 className = 'fw-4'><i>{ dataPage.text }</i></h5>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Instruction;
