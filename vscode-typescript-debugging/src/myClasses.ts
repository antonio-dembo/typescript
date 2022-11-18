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

// Overriding methods
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
  ping(): void {
    console.log("Ping!");
  }

  anotherPing() {
    // do nothing
  }
}

// Type-only Field Declarations
// class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class. 

// inicialization order 

class NewBase {
  name = "base";
  constructor() {
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

// Inheriting Built-in Types
