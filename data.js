window.addEventListener('load', () => {

    // const Detail = localStorage.getItem("detail");
    // const ParsedDetail = JSON.parse(Detail);


    const ParsedDetail = JSON.parse(localStorage.getItem("detail")) || [];

    console.log("parsedetail", JSON.parse(localStorage.getItem("detail")));

    for (var i = 0; i <= ParsedDetail.length; i++) {
        console.log("loop",ParsedDetail[i].Name);
        var sno = i + 1;
        document.getElementById('data-name').innerHTML = ParsedDetail[i].Name;
        document.getElementById('data-mobilenumber').innerHTML = ParsedDetail[i].Mobilenumber;
        document.getElementById('data-email').innerHTML = ParsedDetail[i].Email;
        document.getElementById('data-address').innerHTML = ParsedDetail[i].Address;
        document.getElementById('data-sno').innerHTML = sno;
    }
})
