// window.addEventListener('load', () => {

//     // const Detail = localStorage.getItem("detail");
//     // const ParsedDetail = JSON.parse(Detail);


//     const ParsedDetail = JSON.parse(localStorage.getItem("detail")) || [];

//     console.log("parsedetail", ParsedDetail);

//     if(JSON.parse(localStorage.getItem("detail")) == null){
//         localStorage.setItem("detail",JSON.stringify([ParsedDetail]));
//     }else{
//         let data = JSON.parse(localStorage.getItem("detail"));
//         data.push(ParsedDetail);
//         localStorage.setItem("detail",JSON.stringify(data))
//     }

//     console.log("data",ParsedDetail);

//     for (var i = 0; i <= data.length; i++) {
//         console.log("loop",data[i].Name);
//         var sno = i + 1;
//         document.getElementById('data-name').innerHTML = ParsedDetail[i].Name;
//         document.getElementById('data-mobilenumber').innerHTML = ParsedDetail[i].Mobilenumber;
//         document.getElementById('data-email').innerHTML = ParsedDetail[i].Email;
//         document.getElementById('data-address').innerHTML = ParsedDetail[i].Address;
//         document.getElementById('data-sno').innerHTML = sno;
//     }
// })
