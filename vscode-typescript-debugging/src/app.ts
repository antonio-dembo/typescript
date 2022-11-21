import { hello, greet , printCoord, printName, printId, newPrintCoord, doSomething, liveDangerously, Direction, respond, UserResponse, printImportant, greater } from './hello';
import { GoodGreater, Derived, IPingable, Sonar, Base, Box } from "./myClasses";

class App {
    /** Entry point of our code */
    public static Start(){
        console.log(greet('world'));
    }
}

const b = new Box("Hello!");

//App.Start();

// const sonar : IPingable = new Sonar();
// sonar.ping();

// const d = new Derived();
// d.greet();
// d.greet("reader");

// const b: Base = d;
// b.greet();

// (b as Derived).greet("Calling from Base class reference.");