// Function Type expression

type GreatFunction = (a: string ) => void ;

export function greater(fn: GreatFunction) {
    fn("Hello, world.");
}


/** Say hello**/
export const hello = (name: string) => {
    const greating = `Hello ${name}`;
    return greating;
};

export function greet(name: string){
    console.log("Hello, " + name.toUpperCase() + "!!");
}

export function getFavoriteNumber() {
    return 26;
}

export function printCoord(pt: {x: number, y: number}) {

    if(pt == null ){
        throw new Error("Argument null error");        
    }
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

export function printName(obj: {first: string , last?: string}) {    

    // if (obj.last !== undefined) {
    //     console.log(obj.last.toUpperCase());
    // }

    console.log("Hello " + obj.first + " " + obj.last?.toUpperCase() );
    
}

/**Defining a union type. */
export function printId(id: number | string ) {
    
    if(typeof id === "string"){
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else{
        // Here, id is of type 'number'
        console.log(id);
    }    
}

/**Defining a union type. */
export function welcomePeople(x: string[] | string ) {
    
    if(Array.isArray(x)){
        // Here: x is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else{
        // Here:  x is 'string'
        console.log(x);
    }    
}

/** Type Aliases */

type Point = {
    x: number,
    y: number
};

export function newPrintCoord(pt: Point) {

    if(pt == null ){
        throw new Error("Argument null error");        
    }

    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

// Naming a Union type
type ID = number | string;

// Interface

interface Animal {
    name: string
};

interface Bear extends Animal {
    honey: boolean,
};

//const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Literal types

interface Options {
    width: number
};

function configure(x:Options | "auto") {
    // ...
};

configure({width: 100});
configure("auto")



// Literal inference
// The "as const" suffix acts like const but for the type system, 
// ensuring that all properties are assigned the literal type instead of a more general version like string or number.
const req = { url: "https://example.com", method: "GET" } as const;

// uncomment this will throw an error.
// req.url = "my it";
// req.method = "POST";

//handleRequest(req.url, req.method);

function handleRequest(url: string, method: string ) {
    throw new Error("Function not implemented.");
}

// Null and Undefined

export function doSomething(x: string | null) {
    if(x === null){
        //Do nothing
    }
    else{
       console.log("Hello, " + x.toUpperCase()); 
    }
    
}

// Non-null assertion Operator (Postfix !)
export function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}

// Numeric Enums


export enum UserResponse{
    No = 0,
    Yes = 1,
}

export function respond(recipient: string , message: UserResponse): void {
    // ...
}

// String Enums
export enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel ;

export function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];

    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
    
}