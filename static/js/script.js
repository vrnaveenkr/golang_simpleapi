$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/api"
    }).done(function (data) {
        $.each(data, function(k,v){
            $("ul#messages").append("<li class='list-group-item'><strong>" + v["username"] + "</strong>:&nbsp;<i>" + v["message"] + "</i></li>");
        })
    });
})