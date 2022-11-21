import { hello, greet , printCoord, printName, printId, newPrintCoord, doSomething, liveDangerously, Direction, respond, UserResponse, printImportant, greater } from './hello';
import { GoodGreater, Derived, IPingable, Sonar, Base, Box1, ClearableBox, DerivedBase3 } from "./myClasses";

class App {
    /** Entry point of our code */
    public static Start(){
        console.log(greet('world'));
    }
}

const db3 = new DerivedBase3();
db3.printName();



// const a = new ClearableBox();
// const b = a.set("Hello");

// console.log(b.clear());


//App.Start();

// const sonar : IPingable = new Sonar();
// sonar.ping();

// const d = new Derived();
// d.greet();
// d.greet("reader");

// const b: Base = d;
// b.greet();

// (b as Derived).greet("Calling from Base class reference.");