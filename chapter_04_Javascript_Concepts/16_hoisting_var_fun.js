var status_code = "Deactive";

function getUserStatus() {

    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}
getUserStatus();

//Note: var is fucntion-scoped. so status is hoisted to
//the top of getUserStatus(), NOT the global scope.




