/* What happens when you try to reassign values to variables declared with let, var, and const? Write a function reassignVariables() that demonstrates reassigning values to each type of variable.*/


function reassignVariables()
{
    var a= 5;
    let b=10;
    const c=33;

    // for var we can "reintialize" and "redeclare"
    var a=10;
    console.log(a);


    // for le we can "reintialize" but cannot "redeclare"
    // let b=40;
    // console.log(b);

    // we cannot "reintialize" or "redeclare"
    // c=21;
    // console.log(c);
    
}

reassignVariables();