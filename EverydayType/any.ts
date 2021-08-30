let obj: any = {x: 24};

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// compile any.ts file
// tsc any.ts

// any isn't type checked. Use the compiler flag noImplicitAny to falg
// any implicit any as an error
// tsc noImplicitAny any.ts







