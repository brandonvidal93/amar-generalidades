import getAPI from './findAPI';

let API = null;
let _init = false;
// let _finish = false;
let gMin = "0";
// let oMin = "0";
let gMax = "100";
// let oMax = "100";
let count = 0;

////////////////////////////////////////////////////////// init conection with LMS
/// return  true / false;
function _inicialized() {

  let result = API.LMSInitialize("");
  if (result === "false") return false;
  if (result === "true") return true;
}
//////////////////////////////////////////////////////////end init conection with LMS

export default class SCORMLib {
  //***********************************constructor;
  constructor() {
    API = getAPI();
    if (API == null) {
      console.log("no estas conectado a un lMS");
      return;
    }

    if (!_inicialized()) {
      let errorNumber = API.LMSGetLastError();
      let errorString = API.LMSGetErrorString(errorNumber);
      let diagnostic = API.LMSGetDiagnostic(errorNumber);

      console.log(`Error number: ${errorNumber} description: ${errorString } diagnostic: ${diagnostic }`);

      return
    }

    _init = true;
    this.setGlobalMinMax(gMin, gMax);
    //count = API.LMSGetValue("cmi.objectives._count");
    console.log(count);
    //***********************************end constructor;
  }
  ///////////////////////////////////////////
  /**
   get conectionstate
  */
  getConnetionStatus() {
    return _init;
  }

  ///////////////////////////////////////////
  /*

  this method return student nada
  *
  *@Param   booleam
    reverse change order --- student_name

  * return String
  *
  *
  */
  getStudentName(reverse = false) {
    let name = API.LMSGetValue("cmi.core.student_name");
    let parts;
    if (!reverse)
      if (name.indexOf(",") !== -1) {
        parts = name.split(",");
        name = `${parts[1]}${parts[0]}`;
      }


    return name;
  }
  ///////////////////////////////////////////

  getStudentId() {
    return API.LMSGetValue("cmi.core.student_id");
  }

  ///////////////////////////////////////////

  getLocation() {
    return API.LMSGetValue("cmi.core.lesson_location");
  }

  ///////////////////////////////////////////

  setLocation(location) {
    return API.LMSSetValue("cmi.core.lesson_location", String(location));
  }

  ///////////////////////////////////////////

  setScore(scoreValue, min = 0, max = 100) {
    if (!_init)
      return "no connetion with LMS";

    return API.LMSSetValue("cmi.core.score.raw", String(scoreValue));

  }

  ///////////////////////////////////////////

  getScore() {
    if (!_init)
      return "no connetion with LMS";


    // console.log('Esta es la nota con la que inicia ' + API.LMSGetValue("cmi.core.score.raw"));
    return API.LMSGetValue("cmi.core.score.raw");
  }

  /////////////////////////////////////////////
  /*this method set min max globar calfication
  *
  *@Param   number, number

  *no return;
  *
  */
  setGlobalMinMax(min, max) {

    API.LMSSetValue("cmi.core.score.min", String(min));
    API.LMSSetValue("cmi.core.score.max", String(max));
  }

  ///////////////////////////////////////////

  setObjective(objective, ...minMax) {
    API.LMSSetValue(`cmi.objectives.${count}.id`, String(objective));
    if (minMax.length > 0)
      try {
        API.LMSSetValue(`cmi.objectives.${count}.score.min`, String(minMax[0]));
        API.LMSSetValue(`cmi.objectives.${count}.score.max`, String(minMax[1]));
      } catch (e) {
        console.log(e);
      }
    count++;
  }
  ///////////////////////////////////////////
  setObjectiveScore(position, score) {
    API.LMSSetValue(`cmi.objectives.${position}.score.raw`, String(score));
  }
  ///////////////////////////////////////////

  setObjectiveStatus(position, status) {
    console.log("..." + status);
    API.LMSSetValue(`cmi.objectives.${position}.status`, status);
  }
  ///////////////////////////////////////////
  getObjectiveStatus(position) {
    return API.LMSGetValue(`cmi.objectives.${position}.status`);
  }
  ///////////////////////////////////////////

  getObjetive(position) {
    return API.LMSGetValue(`cmi.objectives.${position}.id`);
  }

  ///////////////////////////////////////////

  setObjectiveMinMax(position, min, max) {
    API.LMSSetValue(`cmi.objectives.${position}.score.min`, String(min));
    API.LMSSetValue(`cmi.objectives.${position}.score.max`, String(max));
  }

  ///////////////////////////////////////////

  setLessonStatus(status) {
    console.log('SET: ' + API.LMSSetValue("cmi.core.lesson_status", status));
    API.LMSSetValue("cmi.core.lesson_status", status);
  }

  getLessonStatus() {
    return API.LMSGetValue("cmi.core.lesson_status");
  }

  ///////////////////////////////////////////

  setSuspendData(data) {
    if (!_init)
      return "no connetion with LMS";

    API.LMSSetValue("cmi.suspend_data", data);
  }

  getSuspendData() {
    if (!_init)
      return "no connetion with LMS";

    return API.LMSGetValue("cmi.suspend_data");
  }

  /////////////////////////////////////////// SESSION / TOTAL TIME

  setSessionTime(valueTime) {
    // SESSION TIME
    if (!_init)
      return "no connetion with LMS";

    API.LMSSetValue("cmi.core.session_time", valueTime);
  }

  getSessionTime() {
    // SESSION TIME
    if (!_init)
      return "no connetion with LMS";

    return API.LMSGetValue("cmi.core.session_time");
  }

  setTotalTime(valueTime) {
    // TOTAL TIME
    if (!_init)
      return "no connetion with LMS";

    API.LMSSetValue("cmi.core.total_time", valueTime);
  }

  getTotalTime() {
    // TOTAL TIME
    if (!_init)
      return "no connetion with LMS";

    return API.LMSGetValue("cmi.core.total_time");
  }

  ///////////////////////////////////////////

  exitNotComplete() {
    if (API.LMSGetValue("cmi.core.score.raw") === "") {
      API.LMSSetValue("cmi.core.lesson_status", "incomplete");
      API.LMSSetValue("cmi.core.exit", "suspend");
    } else {
      API.LMSSetValue("cmi.core.exit", "");
    }

    ///////////////////////////////////////////
    //// GUARDADO DEL TIEMPO EN TOTAL_TIME ////
    ///////////////////////////////////////////

    console.log('TIEMPO');
    console.log(API.LMSGetValue("cmi.core.session_time"));
    API.LMSSetValue("cmi.core.total_time", API.LMSGetValue("cmi.core.session_time"));

    ///////////////////////////////////////////

    API.LMSGetValue("cmi.core._children")
    API.LMSFinish("");
    API.LMSFinish("");
  }

  ///////////////////////////////////////////

  save() {
    if (_init) API.LMSCommit("");
  }

  ///////////////////////////////////////////
  /*
   end method

   close comunication width lms
  */
  close() {
    API.LMSGetValue("cmi.core._children")
    API.LMSFinish("");
    _init = false;
  }

  ///////////////////////////////////////////
}
