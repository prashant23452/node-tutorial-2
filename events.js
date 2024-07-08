const EventEmiiter = require('events');

class MyEmitter extends EventEmiiter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', ()=>{
    console.log('Please turnoff the motor!');
    setTimeout(() =>{
        console.log('Please turn off the motor! Its a gentle reminder');
    },3000);
});

console.log("The script is running ")
console.log("The script is still running ")

myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');
myEmitter.emit('WaterFull');