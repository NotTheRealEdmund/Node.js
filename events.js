var events = require('events');
var eventEmitter = new events.EventEmitter();   // This will create an object instance eventEmitter

class Person {                                  // Create a Person class 
    constructor(name) {
        this._name = name 
    }
    get name() {
        return this._name;
    }
}

var myEventHandler = function (myName) {        // Create an event handler, takes in an argument
    let person = new Person(myName);            // The instance person is an instance of Person class created using the argument
    console.log('My name is ' + person.name);
}

eventEmitter.on('greet', myEventHandler);       // Assign the event handler to an event

eventEmitter.emit('greet', 'Edmund');           // Trigger the 'greet' event, passing the argument 'Edmund'