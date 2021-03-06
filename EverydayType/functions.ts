// Parameter type annotations - go after the parameter name:
function greet(name : string) 
{
    console.log("Hello " + name.toUpperCase() + "!!!");    
}

// this would be a runtime error if executed
//greet(42);

// return type annotation appear after the 'parameter list'
function getFavoriteNumber () : number {
    return 42;
}

