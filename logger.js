//the capitolization of this constant indicates that it is a class, not a function
//class is container for related methods and properties

const EventEmitter = require('events');

var url = "http://myurl.io/log";
var msg;

class Logger extends EventEmitter {
  log(message){
    //html requests usually go here
    console.log(message);
    this.emit('messageLogged', {id: 1, url: 'http://'});  //signaling that an event has happened @param name of event
  }
}

module.exports= Logger;
