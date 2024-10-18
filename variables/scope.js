let globalVar="I am global";

function modifyGlobalVar()
{
  globalVar="I am modified in function";
}

console.log(globalVar); //It consoled the global var
modifyGlobalVar(); // It didn't console the o/p but changed the global var
console.log(globalVar); //redeclared inside the functionscope
console.log(globalVar);