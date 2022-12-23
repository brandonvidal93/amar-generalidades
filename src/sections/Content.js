import React, { Component } from 'react';
import MenuCourse from './pages/MenuCourse';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
// import {
//   Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14,
//   Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29,
//   Page30, Page31, Page32, Page33, Page34 
// } from './pages/Pages';

import Cover from './pages/Cover/Cover';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/Page5/Page5';
import Page6 from './pages/Page6/Page6';
import Page7 from './pages/Page7/Page7';
import Page8 from './pages/Page8/Page8';
import Page9 from './pages/Page9/Page9';
import Page10 from './pages/Page10/Page10';
import Page11 from './pages/Page11/Page11';
import Page12 from './pages/Page12/Page12';
import Page13 from './pages/Page13/Page13';

class Content extends Component {
  showContent = () => {
    const { actualIndex, clickNavigation, data, checkEnabledUnit, endActivities, checkEndActivity, checkEndUnit, setScore, calificacion } = this.props;

    switch (actualIndex) {
      // COVER -------------------------------------------------------------------------------
      case 0: return ( <Cover dataPage = { data.coverPage } startCourse = { clickNavigation } /> );

      // INS ---------------------------------------------------------------------------------
      case 1: return( <Page1 dataPage = { data.page1 } startCourse = { clickNavigation } /> );

      case 2: return( <Page2 dataPage = { data.page2 } endActivities = { endActivities[2] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } /> );

      // UNIDAD 1 ---------------------------------------------------------------------------
      // QUIENES SOMOS ----------------------------------------------------------------------
      case 3: return( <Page3 dataPage = { data.page3 } endActivities = { endActivities[3] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // FIN UNIDAD 1 -----------------------------------------------------------------------

      // UNIDAD 2 ---------------------------------------------------------------------------
      // AHORRO   ---------------------------------------------------------------------------
      case 4: return( <Page4 dataPage = { data.page4 } endActivities = { endActivities[4] } checkEndActivity = { checkEndActivity } /> );

      case 5: return( <Page5 dataPage = { data.page5 } endActivities = { endActivities[5] } checkEndActivity = { checkEndActivity } /> );

      case 6: return( <Page6 dataPage = { data.page6 } endActivities = { endActivities[6] } checkEndActivity = { checkEndActivity } /> );

      // CREDITO   ---------------------------------------------------------------------------
      case 7: return( <Page7 dataPage = { data.page7 } endActivities = { endActivities[7] } checkEndActivity = { checkEndActivity } /> );

      case 8: return( <Page8 dataPage = { data.page8 } endActivities = { endActivities[8] } checkEndActivity = { checkEndActivity } /> );

      case 9: return( <Page9 dataPage = { data.page9 } /> );

      case 10: return( <Page10 dataPage = { data.page10 } endActivities = { endActivities[10] } checkEndActivity = { checkEndActivity } /> );

      case 11: return( <Page11 dataPage = { data.page11 } /> );

      case 12: return( <Page12 dataPage = { data.page12 } endActivities = { endActivities[12] } checkEndActivity = { checkEndActivity } /> );

      case 13: return( <Page13 dataPage = { data.page13 }  /> );

      // case 14: return( <Page14 dataPage = { data.page14 } endActivities = { endActivities[14] } checkEndActivity = { checkEndActivity } /> );

      // case 15: return( <Page15 dataPage = { data.page15 } endActivities = { endActivities[15] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // // FIN UNIDAD 2 -----------------------------------------------------------------------

      // // UNIDAD 3 ---------------------------------------------------------------------------
      // case 16: return( <Page16 dataPage = { data.page16 } endActivities = { endActivities[16] } checkEndActivity = { checkEndActivity } /> );

      // case 17: return( <Page17 dataPage = { data.page17 } endActivities = { endActivities[17] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // // FIN UNIDAD 3 -----------------------------------------------------------------------

      // // UNIDAD 4 ---------------------------------------------------------------------------
      // case 18: return( <Page18 dataPage = { data.page18 } endActivities = { endActivities[18] } checkEndActivity = { checkEndActivity } /> );

      // case 19: return( <Page19 dataPage = { data.page19 } endActivities = { endActivities[19] } checkEndActivity = { checkEndActivity } /> );

      // case 20: return( <Page20 dataPage = { data.page20 } endActivities = { endActivities[20] } checkEndActivity = { checkEndActivity } /> );

      // case 21: return( <Page21 dataPage = { data.page21 } endActivities = { endActivities[21] } checkEndActivity = { checkEndActivity } /> );

      // case 22: return( <Page22 dataPage = { data.page22 } endActivities = { endActivities[22] } checkEndActivity = { checkEndActivity } /> );

      // case 23: return( <Page23 dataPage = { data.page23 } endActivities = { endActivities[23] } checkEndActivity = { checkEndActivity } /> );

      // case 24: return( <Page24 dataPage = { data.page24 } endActivities = { endActivities[24] } checkEndActivity = { checkEndActivity } /> );

      // case 25: return( <Page25 dataPage = { data.page25 } endActivities = { endActivities[25] } checkEndActivity = { checkEndActivity } /> );

      // case 26: return( <Page26 dataPage = { data.page26 } endActivities = { endActivities[26] } checkEndActivity = { checkEndActivity } /> );

      // case 27: return( <Page27 dataPage = { data.page27 } endActivities = { endActivities[27] } checkEndActivity = { checkEndActivity } /> );

      // case 28: return( <Page28 dataPage = { data.page28 } endActivities = { endActivities[28] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // // FIN UNIDAD 4 -----------------------------------------------------------------------

      // // UNIDAD 5 ---------------------------------------------------------------------------
      // case 29: return( <Page29 dataPage = { data.page29 } endActivities = { endActivities[29] } checkEndActivity = { checkEndActivity } /> );

      // case 30: return( <Page30 dataPage = { data.page30 } endActivities = { endActivities[30] } checkEndActivity = { checkEndActivity } /> );

      // case 31: return( <Page31 dataPage = { data.page31 } endActivities = { endActivities[31] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // // FIN UNIDAD 5 -----------------------------------------------------------------------

      // // UNIDAD 6 ---------------------------------------------------------------------------
      // case 32: return( <Page32 dataPage = { data.page32 } startQuiz = { clickNavigation } /> );

      // case 33: return( <Page33 dataPage = { data.page33 } endQuiz = { clickNavigation } setScore = { setScore } endActivities = { endActivities[33] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } checkEndUnit = { checkEndUnit } /> );
      // // FIN UNIDAD 4 -----------------------------------------------------------------------

      // // END --------------------------------------------------------------------------------
      // case 34: return( <Page34 dataPage = { data.page34 } calificacion = { calificacion } /> );

      default:
        break;
    }
  }

  render() {
    const { data, enableUnit, goToPage, nextUnit, unitActual, updateActualUnit, updateNextUnit, unitFinal } = this.props;

    return (
      <div className='content'>
        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

        { /* CARGAR DEL MENU LATERAL */ }
        <MenuCourse
          actualIndex = { this.props.actualIndex }
          dataPage = { data.menuCourse }
          enableUnit = { enableUnit }
          goToPage = { goToPage }
          nextUnit = { nextUnit }
          Units = { data.menuCourse.Units }
          unitActual = { unitActual }
          updateActualUnit = { updateActualUnit }
          updateNextUnit = { updateNextUnit }
          unitFinal = { unitFinal } />

          {/* CARGA DEL COMPOMENTE FOOTER */}
        <Footer
          actualIndex = { this.props.actualIndex }
          bgFooter = { this.props.bgFooter }
          clickNavigation = { this.props.clickNavigation }
          data = { this.props.data }
          endActivities = { this.props.endActivities }
          getPos = { this.getPos }
          imageFooter = { this.props.imageFooter }
          labelFooter = { this.props.labelFooter }
          limitNavigation = { this.props.limitNavigation } />
      </div>
    );
  }
}

export default Content;
