"use strict";
// Function Type expression
Object.defineProperty(exports, "__esModule", { value: true });
exports.printImportant = exports.Direction = exports.respond = exports.UserResponse = exports.liveDangerously = exports.doSomething = exports.newPrintCoord = exports.welcomePeople = exports.printId = exports.printName = exports.printCoord = exports.getFavoriteNumber = exports.greet = exports.hello = exports.greater = void 0;
function greater(fn) {
    fn("Hello, world.");
}
exports.greater = greater;
/** Say hello**/
var hello = function (name) {
    var greating = "Hello ".concat(name);
    return greating;
};
exports.hello = hello;
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
exports.greet = greet;
function getFavoriteNumber() {
    return 26;
}
exports.getFavoriteNumber = getFavoriteNumber;
function printCoord(pt) {
    if (pt == null) {
        throw new Error("Argument null error");
    }
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
exports.printCoord = printCoord;
function printName(obj) {
    // if (obj.last !== undefined) {
    //     console.log(obj.last.toUpperCase());
    // }
    var _a;
    console.log("Hello " + obj.first + " " + ((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
exports.printName = printName;
/**Defining a union type. */
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
exports.printId = printId;
/**Defining a union type. */
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: x is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here:  x is 'string'
        console.log(x);
    }
}
exports.welcomePeople = welcomePeople;
function newPrintCoord(pt) {
    if (pt == null) {
        throw new Error("Argument null error");
    }
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
exports.newPrintCoord = newPrintCoord;
;
;
;
function configure(x) {
    // ...
}
;
configure({ width: 100 });
configure("auto");
// Literal inference
// The "as const" suffix acts like const but for the type system, 
// ensuring that all properties are assigned the literal type instead of a more general version like string or number.
var req = { url: "https://example.com", method: "GET" };
// uncomment this will throw an error.
// req.url = "my it";
// req.method = "POST";
//handleRequest(req.url, req.method);
function handleRequest(url, method) {
    throw new Error("Function not implemented.");
}
// Null and Undefined
function doSomething(x) {
    if (x === null) {
        //Do nothing
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
exports.doSomething = doSomething;
// Non-null assertion Operator (Postfix !)
function liveDangerously(x) {
    console.log(x.toFixed());
}
exports.liveDangerously = liveDangerously;
// Numeric Enums
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse = exports.UserResponse || (exports.UserResponse = {}));
function respond(recipient, message) {
    // ...
}
exports.respond = respond;
// String Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
exports.printImportant = printImportant;
//# sourceMappingURL=hello.js.map