function loginPost(){

    var data = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    return $.ajax({
        type: "post",
        url: "http://localhost:3000/api/user",
        data:JSON.stringify(data),
        contentType: "application/json",
        dataType: "json"
    })
}

function login(){

    loginPost().done(function(json_data){
        if(!json_data[0]){
            alert("Transaction error. " + json_data[1]);
        }
        location.reload();

    }).fail(function(){
        alert("Server error. Please try again later.");

    });
}
