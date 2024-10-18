/*Create a function called greet that accepts two parameters: name and greeting. Set greeting to a default value of "Hello". The function should return a string like "Hello, <name>". */

function greet(name, greeting="Hello")
{
  return `${greeting}, ${name}`;
}

console.log(greet("Alice"));