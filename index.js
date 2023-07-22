function handleSubmit(){

    const name = document.getElementById("name").value;
    const mobilenumber = document.getElementById("mobilenumber").value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    console.log("name set",mobilenumber);
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("mobilenumber",mobilenumber)
    sessionStorage.setItem("email",email)
    sessionStorage.setItem("address",address)

    //Mobile Number Validation
    var mobileNumber = document.getElementById("mobilenumber").value;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";
    var expr = /^(0|91)?[6-9][0-9]{9}$/;
    if (!expr.test(mobileNumber)) {
        lblError.innerHTML = "Invalid Mobile Number.";
    }


    return;
}


