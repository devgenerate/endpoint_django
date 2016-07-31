$(document).ready(init);

function init(){
    post_request_to_endpoint_django();
    clear_content();
    get_user_by_id();
}

function clear_content(){
    $(document.body).on("click", "#btn_clear", function(){
        $(".content").html("");
    });    
}


function get_user_by_id(){
    $(document.body).on("click", "#btn_request_by_id", function(){
        var id = $("#input_id").val();
        if(id==""||id==" "){
            alert("id vacío");
        }
        else{
            var html = `<a href="http://localhost:8000/get_user/${id}" id="a2user" target="_blank">GO TO USER</a>`;
            $(".content").html(html);
            $("#a2user").trigger(" click ");
        }
    });    
}


function post_request_to_endpoint_django(){
    $(document.body).on("click", "#btn_request", function(){
        console.log("send: " + $("input[name=csrfmiddlewaretoken]").val());
        $.ajax({
            type: "post",
            url: "/get_users",
            data: {csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()},
            success: function(data){
                console.log("new data from django");
                console.log(data);
                var html = '<ul style="text-align: left;">';
                for(var tmp_data in data){
                    var current_obj = data[tmp_data].fields;
                    for(var key in current_obj){
                        console.log(key);
                        html += `<li><b>${key}:</b> ${data[tmp_data].fields[key]}</li>` ;
                    }
                    html += '<hr>';
                }
                html += '<ul>';
                $(".content").hide();
                $(".content").html(html);
                $(".content").fadeIn();            
            },
            error: function(err){
                console.log("Error");
                console.log(err);
            },
        });
    });
}