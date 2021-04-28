import React, { Component } from 'react';

import './InteractivePath.scss';

class InteractivePath extends Component {
  state = {
    actualItem: 0,
    countItem: 0,
  }

  showInfo = e => {
    const { dataPage } = this.props;

    e.preventDefault();

    const IDITEM = e.target.id;

    let idItem = parseInt(IDITEM);

    document.getElementById(idItem).classList.add('visited');
    document.getElementById('textInfo').innerHTML = dataPage.items[idItem - 1].info;

    if (idItem <= dataPage.items.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });

        if (idItem !== dataPage.items.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabledGray');
          this.setState({ countItem: this.state.countItem + 1 });
        } else {
          this.setState({ countItem: this.state.countItem + 1 });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }
    }
  }

  render() {
    const { dataPage } = this.props;

    return(
      <div className = 'interactivePath d-Flex j-C aI-C'>
        {
          dataPage.items.map((item, i) => {
            return(
              <img
                alt = 'Item'
                className = { 'pAbs btnItem ' + (i !== 0 ? 'disabledGray' : '') }
                id = { i + 1 }
                key = { i }
                onClick = {this.showInfo}
                src = { item.img }
                style = { { 'top': item.posY, 'left': item.posX } }
                />
            )
          })
        }
        <div className = 'boxInfo d-Flex j-C aI-C'>
          <p className = 'fw-7 tCenter mL-1 mR-1' id = 'textInfo'></p>
        </div>
      </div>
    )
  }

}

export default InteractivePath;
