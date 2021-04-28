import React, { Component } from 'react';

import './ChatPhone.scss';

class ChatPhone extends Component {
  trackScrolling = () => {
    // console.log('hago escrol');
    const {isEnded} = this.props;
    const scrollChat = document.getElementById('chatMessageBox');
    if(scrollChat.offsetHeight + scrollChat.scrollTop >= scrollChat.scrollHeight)
    {
      isEnded(true);
    }
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'chatPhone'>
        <div className = 'messageBox dF-C-sst' onScroll = { this.trackScrolling } id = 'chatMessageBox'>
          {
            dataPage.multimedia.messages.map( (item, i) => {
              return(
                <div key = { i } className = {'mB-05 ' + (item.side)} >
                  {
                    item.img ? <img alt = 'Imagen mB-05' className = '' src = { item.img }/> : null
                  }
                  <p className = '' dangerouslySetInnerHTML = { { __html: item.text } } />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default ChatPhone;
