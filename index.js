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



    if (name && mobilenumber && email && address) {
        if (Details.length <= 0) {
            localStorage.setItem("detail", null)
        }
        let id = employeDetail.length + 1;

        if (JSON.parse(localStorage.getItem("detail")) == null) {
            Details.push(employeDetail)
            console.log("employedetail", employeDetail);
            localStorage.setItem("detail", JSON.stringify([employeDetail]));
            let a = JSON.parse(localStorage.getItem("detail"));
            Details.push(a)
        } else {
            debugger
            let data = JSON.parse(localStorage.getItem("detail"));
            data.push(employeDetail);
            localStorage.setItem("detail", JSON.stringify(data))
        }

    }

    console.log("data", ParsedDetail);

    for (var i = 0; i <= data.length; i++) {
        console.log("loop", data[i].Name);
        var sno = i + 1;
        document.getElementById('data-name').innerHTML = ParsedDetail[i].Name;
        document.getElementById('data-mobilenumber').innerHTML = ParsedDetail[i].Mobilenumber;
        document.getElementById('data-email').innerHTML = ParsedDetail[i].Email;
        document.getElementById('data-address').innerHTML = ParsedDetail[i].Address;
        document.getElementById('data-sno').innerHTML = sno;

        // Regular expression pattern for email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Clearing previous error messages
        document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());


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


}