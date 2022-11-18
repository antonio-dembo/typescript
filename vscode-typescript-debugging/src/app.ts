import { hello, greet , printCoord, printName, printId, newPrintCoord, doSomething, liveDangerously, Direction, respond, UserResponse, printImportant, greater } from './hello';
import { GoodGreater, Derived, IPingable, Sonar, Base } from "./myClasses";

class App {
    /** Entry point of our code */
    public static Start(){
        console.log(greet('world'));
    }
}

App.Start();

const sonar : IPingable = new Sonar();
sonar.ping();

const d = new Derived();
d.greet();
d.greet("reader");

const b: Base = d;
b.greet();

class MyClass {
}

if ( b as Derived instanceof Derived) {
    console.log(`${b} is instance of type 'Derived'.`);
}

if( b as Base instanceof Base){
    console.log(`${b} is instance of type 'Base'.`);
}

if( !(b instanceof MyClass)){
    console.log(`${typeof b} is not instance of type 'MyClass'.`);
}