import React from 'react';
import './Page25.scss';

// import Instruction from '../../../components/Instruction';

import HeaderImage from '../../../assets/img/menuCourse/n-10.png';
import Image from '../../../assets/img/25/1.png';

const Page25 = ({dataPage}) => {
  return (
    <div className='pageContent page-25 animated fadeIn'>
      <div className = 'headerTitle d-Flex d-Rr j-E aI-C mB-05 mL-4 mT-1'>
        <h2
          className = 'textHeader F2 mL-1 mB-05'
          dangerouslySetInnerHTML = {{ __html: dataPage.headerPage.textHeader }}
          style = {{ 'borderColor': dataPage.headerPage.color }}></h2>

        <img alt = 'Imagen' className = '' src = { HeaderImage }/>
      </div>

      <img alt = 'Imagen' className = 'imageNPC pAbs' src = { Image }/>
      
      <div className = 'c-10 animated fadeIn'>
        <div className = 'mL-7 c-4 mT-1 mR-2'> 
          {
            dataPage.title ? <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h2> : null
          }
          {
            dataPage.text ? <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p> : null
          }
        </div>
      </div>

      {/* <Instruction dataPage = { dataPage.instruction } /> */}
    </div>
  )
}

export default Page25;