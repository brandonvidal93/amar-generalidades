import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './ItemInteractiveSubtitle.scss';

// library.add(fas, fab, far);

class ItemInteractiveAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      pageItem: 0,
      items: []
    }
  }

  // makeItem = () => {
  //   const ITEM = this.props.dataItem.map( (item, i) => {
  //     return(
  //       <div
  //         id = { item.time }
  //         className = { 'itemList c-5 d-Flex d-Rr j-E aI-C pL-1 pR-1 mB-05 animated fadeIn dNone'}
  //         key = { i }
  //         style = { {} }>
  //           <p className = 'textList' dangerouslySetInnerHTML = {{ __html: item.label }}></p>
  //           <FontAwesomeIcon
  //           className = 'iconList'
  //           icon = { ['fas', 'square'] }
  //           size = '2x'
  //           style = { { 'color': item.color } } />
  //       </div>
  //     );
  //   });
  //   this.showItem(ITEM);
  //   return ITEM;
  // }

  showItem = (item) => {
    // console.log('item recibido: ');
    // console.log(item);
    for (var i = 0; i < item.length; i++) {
      if (this.props.time === item[i].props.id) {
        let itemGet = document.getElementById(item[i].props.id);
        itemGet.classList.remove('dNone');
      }
      // if (this.props.movePage === true && this.props.time === this.props.moveTime) {
      //   document.getElementById('contentArea').style.left = '-975px';
      // }
    }
  }

  render() {
    return (
      <div className = 'd-Flex d-C j-S aI-S c-55 wW' style = {{ 'height': 200 }}>
        { this.makeItem() }
      </div>
    );
  }
}

export default ItemInteractiveAudio;

// <div
//   id = { item.time }
//   className = { 'itemInfo animated fadeIn dNone ' + (item.labelSide === 'left' ? 'dF-Rr-cc' : 'dF-C-cc') + (item.last === true ? ' lastItem' : ' item') }
//   key = { i }
//   style = { { 'top': item.position.yPosition, 'left': item.position.xPosition, 'width': item.widthBox } }>
//   {item.icon !== '' ? <img
//     alt = 'Imagen Item'
//     className = 'imageItem'
//     style = { { 'width': item.size } }
//     src = { item.icon }/> : null }
//   <h5 className = 'fw-3 mB-05 tCenter' dangerouslySetInnerHTML = { { __html: item.label } } />
// </div>

// <div className = 'd-Flex j-C aI-S c-55 wW mL-4'>
//   {
//     dataPage.listItem.map((item, index) =>
//       <div className = 'itemList c-5 d-Flex d-Rr j-E aI-C pL-1 pR-1 mB-05' key = { index + 1 } id = { index + 1 }>
//           <p className = 'textList' dangerouslySetInnerHTML = {{ __html: item.text }}></p>
//           <FontAwesomeIcon
//           className = 'iconList'
//           icon = { ['fas', 'square'] }
//           size = '2x'
//           style = { { 'color': item.color } } />
//       </div>
//     )
//   }
// </div>
