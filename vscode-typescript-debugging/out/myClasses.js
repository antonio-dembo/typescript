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
exports.DerivedBase3 = exports.Params = exports.ClearableBox = exports.Box1 = exports.Box = exports.Sonar = exports.Derived = exports.Base = exports.GoodGreater = void 0;
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
// Static members are also inherited
var Base2 = /** @class */ (function () {
    function Base2() {
    }
    Base2.getGreeting = function () {
        return "Hello world";
    };
    return Base2;
}());
var Derived2 = /** @class */ (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myGreeting = Derived2.getGreeting();
        return _this;
    }
    return Derived2;
}(Base2));
// GENERIC CLASSES 
var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    return Box;
}());
exports.Box = Box;
// there is only one propery slot for static memebers at runtime.
// The static members of a generic class can NEVER refer to the class’s type parameters.
// THIS types
var Box1 = /** @class */ (function () {
    function Box1() {
        this.contents = "";
    }
    Box1.prototype.set = function (value) {
        this.contents = value;
        return this;
    };
    return Box1;
}());
exports.Box1 = Box1;
var ClearableBox = /** @class */ (function (_super) {
    __extends(ClearableBox, _super);
    function ClearableBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearableBox.prototype.clear = function () {
        this.contents = "";
    };
    return ClearableBox;
}(Box1));
exports.ClearableBox = ClearableBox;
// You can also use this in a parameter type annotation:
var Box2 = /** @class */ (function () {
    function Box2() {
        this.content = "";
    }
    Box2.prototype.sameAs = function (other) {
        return other.content === this.content;
    };
    return Box2;
}());
var DerivedBox1 = /** @class */ (function (_super) {
    __extends(DerivedBox1, _super);
    function DerivedBox1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherContent = "?";
        return _this;
    }
    return DerivedBox1;
}(Box2));
var db1 = new DerivedBox1();
db1.content = "Hello";
var db2 = new DerivedBox1();
db2.content = "hello";
console.log(db1.sameAs(db2));
// PARAMETER PROPRERTIES
// are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly.
var Params = /** @class */ (function () {
    function Params(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        // No body necessary
    }
    return Params;
}());
exports.Params = Params;
// CLASS EXPRESSIONS
var someClass = /** @class */ (function () {
    function class_1(value) {
        this.content = value;
    }
    return class_1;
}());
var m = new someClass("Hello World.");
// ABSTRACT CLASSES AND MEMBERS
//  An abstract method or abstract field is one that hasn’t had an implementation provided. 
//These members must exist inside an abstract class, which cannot be directly instantiated.
// The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. 
// When a class doesn’t have any abstract members, it is said to be concrete.
var Base3 = /** @class */ (function () {
    function Base3() {
    }
    Base3.prototype.printName = function () {
        console.log("Hello, " + this.getName);
    };
    return Base3;
}());
// We can’t instantiate 'Base3' with new because it’s abstract.
//const b = new Base3();
// Instead, we need to make a derived class and implement the abstract members:
var DerivedBase3 = /** @class */ (function (_super) {
    __extends(DerivedBase3, _super);
    function DerivedBase3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getName = function () { return "world"; };
        return _this;
    }
    return DerivedBase3;
}(Base3));
exports.DerivedBase3 = DerivedBase3;
//# sourceMappingURL=myClasses.js.map