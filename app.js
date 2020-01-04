
//require returns the object that is exported from the target module

//path module useful for working with files and directories
const path = require('path');

const os = require('os');


var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log("total memory: "+totalMem+"\nfree memory: "+freeMem);

//Template String
//ES6 / ES2015 compatible
//
//console.log('total memory: ${totalMem}');
//console.log('free memory: ${freeMem}');


//myModule
const loggerObj = require('./logger');

var pathObj = path.parse(__filename);


console.log(pathObj);
//output of console.log(pathObj):
//{
//  root: '/',
//  dir: '/Users/jakechandler/Desktop/Atom Workspace/javascript practice/node',
//  base: 'app.js',
//  ext: '.js',
//  name: 'app'
//}




const fs =  require('fs');

//syncronous version of readdir function
//array of strings
const files = fs.readdirSync('./');
console.clear();
console.log(files);


//calls function when asyncronous operation completes (called the callback function)
//the callback function is the second parameter of the function being called
//callback function has an error and result (string array) as parameters,
//only one will have a value and the other will be null
fs.readdir('./', function(err,file){
  if (err){
    console.log(err);
  } else console.log(file);

});




//event is a signal that something has happened in our application
//ex: http module, request is an event
//read request, return the right response


//arrow function
const listenerCalled = (arg)=>{//e (event) or eventarg
  console.log('listener called',arg);
};

//event argument object
//need to register listener
//listener is a function that will be called when the event has occured

const Logger = require('./logger');
const logger = new Logger();

//register listener
logger.on('messageLogged',listenerCalled);

logger.log('message');
