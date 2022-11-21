export class GoodGreater {
  readonly name: string = "world";
  last!: string;

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  //    err(){
  //     this.name = "not ok";
  //    }

};

// OVERRIDE METHODS
// us super. syntax to access base class methods.
// Typescript enforces that a derived class is always a subtype of its base class.

export class Base {
  greet(){
    console.log("Hello, world.");
  };
}

export class Derived extends Base {
  greet(name?: string): void {
    if(name === undefined){
    super.greet();
    }
    else{
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}


/** Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. 
 * It’s fine to expose public fields if you don’t need to add additional logic during the get/set operations. */

class C {
  private _length = 0;
  public get length() {
    return this._length;
  }

  public set length(value) {
    this._length = value;
  }
}


// Heritage

export interface IPingable {
  ping(): void
}

export class Sonar implements IPingable {
  public ping(): void {
    console.log("Ping!");
  }

  public anotherPing() {
    // do nothing
  }
}

// Type-only Field Declarations
// class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class. 

// inicialization order 

class NewBase {
  name = "base";
  public constructor() {
    console.log("My name is " + this.name);
  }
}
 
class NewDerived extends NewBase {
  name = "derived";
}
 
// Prints "base", not "derived"
const d = new NewDerived();

// What happened here?
// The order of class initialization, as defined by JavaScript, is:

// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs

// This means that the base class constructor saw its own value for name during its own constructor, because the derived class field initializations hadn’t run yet.


// Static members are also inherited

class Base2 {
  static getGreeting(){
    return "Hello world";
  }
}

class Derived2 extends Base2{
  myGreeting = Derived2.getGreeting();
}

// GENERIC CLASSES 
export class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

// there is only one propery slot for static memebers at runtime.
// The static members of a generic class can NEVER refer to the class’s type parameters.

// THIS types

export class Box1{
  contents: string = "";
  set(value: string){
    this.contents = value;
    return this;
  }
}

export class ClearableBox extends Box1 {
  clear() {
    this.contents = "";
  }
}

// You can also use this in a parameter type annotation:

class Box2 {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox1 extends Box2 {
  otherContent: string =  "?";
}

const db1 = new DerivedBox1()
db1.content = "Hello";
const db2 = new DerivedBox1()
db2.content = "hello";

console.log(db1.sameAs(db2));

// PARAMETER PROPRERTIES
// are created by prefixing a constructor argument with one of the visibility modifiers public, private, protected, or readonly.

export class Params {
  constructor(
    public readonly x: number, 
    protected y: number,
    private z: number
  ) {
      // No body necessary
  }
}

// CLASS EXPRESSIONS
const someClass = class<Type> {
  content: Type
  constructor(value: Type) {
    this.content = value;
  }
}

const m = new someClass("Hello World.");

// ABSTRACT CLASSES AND MEMBERS

//  An abstract method or abstract field is one that hasn’t had an implementation provided. 
//These members must exist inside an abstract class, which cannot be directly instantiated.

// The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. 
// When a class doesn’t have any abstract members, it is said to be concrete.

abstract class Base3 {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName);
  }
}

// We can’t instantiate 'Base3' with new because it’s abstract.
//const b = new Base3();

// Instead, we need to make a derived class and implement the abstract members:
export class DerivedBase3 extends Base3 {
  getName(): string {
    return "world";
  }
};



