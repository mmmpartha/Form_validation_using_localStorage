window.addEventListener('load',()=>{

    const name = sessionStorage.getItem("name");
    const mobilenumber = sessionStorage.getItem("mobilenumber");
    const email = sessionStorage.getItem("email");
    const address = sessionStorage.getItem("address");

    console.log("getname",name);


    document.getElementById('data-name').innerHTML = name;
    document.getElementById('data-mobilenumber').innerHTML = mobilenumber;
    document.getElementById('data-email').innerHTML = email;
    document.getElementById('data-address').innerHTML = address;
})


function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("data-name"+no);
 var mobilenumber=document.getElementById("data-mobilenumber"+no);
 var email=document.getElementById("data-email"+no);
 var address=document.getElementById("data-address"+no);

	
 var name_data=name.innerHTML;
 var mobilenumber=mobilenumber.innerHTML;
 var email=email.innerHTML;
 var address=address.innerHTML;

	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 mobilenumber.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 email.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
 address.innerHTML="<input type='text' id='address_text"+no+"' value='"+address_data+"'>"
}

function save_row(no)
{
 var name_val=document.getElementById("data-name"+no).value;
 var mobilenumber_val=document.getElementById("data-mobilenumber"+no).value;
 var email_val=document.getElementById("data-email"+no).value;
 var address_val=document.getElementById("data-address"+no).value;

 document.getElementById("data-name"+no).innerHTML=name_val;
 document.getElementById("data-mobilenumber"+no).innerHTML=mobilenumber_val;
 document.getElementById("data-email"+no).innerHTML=email_val;
 document.getElementById("data-address"+no).innerHTML=address_val;


 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_country=document.getElementById("new_country").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}