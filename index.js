function handleSubmit() {

    const name = document.getElementById("name").value;
    const mobilenumber = document.getElementById("mobilenumber").value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    var Details = [];
    
    var employeDetail = {
        Name: name,
        Mobilenumber: mobilenumber,
        Email: email,
        Address: address,
        id: 0
    };

    console.log(name, mobilenumber, email, address);

    if (name && mobilenumber && email && address) {
        let id = employeDetail.length + 1;
        console.log("employedetail", employeDetail);
        Details.push(...employeDetail)
        //    Detail.map((Detail)=>{
        //     console.log("el",Detail);
        //     localStorage.setItem("detail", JSON.stringify(Detail));
        //    })
        localStorage.setItem("detail", JSON.stringify(Details));
        console.log("detail",JSON.stringify(Details));
    }

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    // if (name === "") {
    //     showError(fullnameInput, "Enter your full name");
    // }
    // if (!emailPattern.test(email)) {
    //     showError(emailInput, "Enter a valid email address");
    // }
    // if (mobilenumber === "") {
    //     showError(passwordInput, "Enter your mobilenumber");
    // }
    // if (address === "") {
    //     showError(dateInput, "Enter your address");
    // }

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


