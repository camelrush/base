use strict;

function loginPost(){

    var data = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    return $.ajax({
        type: "get",
        url: "http://localhost:3000/api/user",
        data:JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    });
}

function login(){

    loginPost().done(function(json_data){
        if(!json_data){
            alert("json_data is undefined.");
            return;
        }
        if(!json_data[0]){
            alert("1");
            alert(json_data);
            alert("2");
            alert("Transaction error. " + json_data[1]);
        }
        location.reload();

    }).fail(function(){
        alert("Server error. Please try again later.");

    });
}
