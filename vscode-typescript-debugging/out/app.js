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
App.Start();
var sonar = new myClasses_1.Sonar();
sonar.ping();
var d = new myClasses_1.Derived();
d.greet();
d.greet("reader");
var b = d;
b.greet();
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
if (b instanceof myClasses_1.Derived) {
    console.log("".concat(b, " is instance of type 'Derived'."));
}
if (b instanceof myClasses_1.Base) {
    console.log("".concat(b, " is instance of type 'Base'."));
}
if (!(b instanceof MyClass)) {
    console.log("".concat(typeof b, " is not instance of type 'MyClass'."));
}
//# sourceMappingURL=app.js.map