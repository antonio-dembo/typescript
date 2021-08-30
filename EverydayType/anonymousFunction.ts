// no type annotation here, but typescript can still spot the bug
let names = ["Alice", "Bob", "Eve"];

// contextual typing for function
names.forEach( function (s) 
{
    // this code throws has error
    console.log(s.toUpperCase()); 
})

// contextual typing also applies to arrow (=>) functions
names.forEach( (s) => 
{
    // this code throws an error
    console.log(s.toLowerCase()); 
})