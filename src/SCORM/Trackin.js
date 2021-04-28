export default class Tracking {

  constructor(sco, total) {
    this._sco = sco;
    this._total = total;
    this._count = 0;
    this._current = 0;
    this._views = [];
  }

  //////////////////////////////////////////////////////////////////////////

  saveLocation(location) {
    console.log('Se guarda esta posición: ' + location);
    if (this._sco.getConnetionStatus()) {
      this._sco.setLocation(location);
      this._sco.save();
    }
  }

  ///////////////////////////////////////////////////////////////////

  getLocation() {
    let location = 0; // DEVUELVE 0 si no hay conexión al LMS

    if (this._sco.getConnetionStatus()) {
      location = parseInt(this._sco.getLocation());
    }

    return location;
  }

  ////////////////////////////////////////////////////////////////////////

  exit() {
    this._sco.exitNotComplete();
  }

  ////////////////////////////////////////////////////////////////////////

  _scoreSet(raw) {
    if(this._sco.getConnetionStatus()) {
      this._sco.setScore(raw);

    if (raw >= 70) {
      this._sco.setLessonStatus("passed");
      console.log('Curso aprobado');
    } else {
      this._sco.setLessonStatus("failed");
      console.log('Curso fallido');
    }

      this._sco.save();
    }
  }

  _getScore(){
    this._sco.getScore()
  }

  ////////////////////////////////////////////////////////////////////////

  _setSuspendData(data) {
    if (this._sco.getConnetionStatus()) {
      this._sco.setSuspendData(data);
    }
  }

  _getSuspendData() {
    let data = "";

    if (this._sco.getConnetionStatus()) {
      data = this._sco.getSuspendData();
    }

    return data;
  }

  /////////////////////////////////////////// SESSION / TOTAL TIME

  _setSessionTime(sessionTime) {
    if (this._sco.getConnetionStatus()) {
      this._sco.setSessionTime(sessionTime);
    }
  }

  _getSessionTime() {
    let sessionTime = "";

    if (this._sco.getConnetionStatus()) {
      sessionTime = this._sco.getSessionTime();
    }

    return sessionTime;
  }

  ////////////////////////////////////////////////////////////////////////

  _setLessonStatus(status) {
    if (this._sco.getConnetionStatus()) {
      this._sco.setLessonStatus(status);
    }
  }
}
