"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
var myClasses_1 = require("./myClasses");
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our code */
    App.Start = function () {
        console.log((0, hello_1.greet)('world'));
    };
    return App;
}());
var db3 = new myClasses_1.DerivedBase3();
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
//# sourceMappingURL=app.js.map