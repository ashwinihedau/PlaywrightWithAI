var a = 10; //Global scope
console.log(a)

//Varis function scoped
function variable() {
    var a = 20; //Local scope
    console.log(a);
    a = 30;  //Reassign
    console.log(a);

    if (true){
        var a = 40; //Redeclared
        console.log(a);
    }
}

variable();