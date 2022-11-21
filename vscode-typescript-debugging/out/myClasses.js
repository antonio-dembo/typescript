"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgError = exports.Sonar = exports.Derived = exports.Base = exports.GoodGreater = void 0;
var GoodGreater = /** @class */ (function () {
    function GoodGreater(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    return GoodGreater;
}());
exports.GoodGreater = GoodGreater;
;
// OVERRIDE METHODS
// us super. syntax to access base class methods.
// Typescript enforces that a derived class is always a subtype of its base class.
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("Hello, world.");
    };
    ;
    return Base;
}());
exports.Base = Base;
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("Hello, ".concat(name.toUpperCase()));
        }
    };
    return Derived;
}(Base));
exports.Derived = Derived;
/** Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript.
 * It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations. */
var C = /** @class */ (function () {
    function C() {
        this._length = 0;
    }
    Object.defineProperty(C.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("Ping!");
    };
    Sonar.prototype.anotherPing = function () {
        // do nothing
    };
    return Sonar;
}());
exports.Sonar = Sonar;
// Type-only Field Declarations
// class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class. 
// inicialization order 
var NewBase = /** @class */ (function () {
    function NewBase() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
    return NewBase;
}());
var NewDerived = /** @class */ (function (_super) {
    __extends(NewDerived, _super);
    function NewDerived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "derived";
        return _this;
    }
    return NewDerived;
}(NewBase));
// Prints "base", not "derived"
var d = new NewDerived();
// What happened here?
// The order of class initialization, as defined by JavaScript, is:
// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs
// This means that the base class constructor saw its own value for name during its own constructor, because the derived class field initializations hadn’t run yet.
// Inheriting Built-in Types
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(m) {
        return _super.call(this, m) || this;
    }
    MsgError.prototype.sayHello = function () {
        return "hello" + this.message;
    };
    return MsgError;
}(Error));
exports.MsgError = MsgError;
//# sourceMappingURL=myClasses.js.map