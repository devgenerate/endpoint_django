$(document).ready(init);

function init(){
    post_request_to_endoint_django();
    clear_content();
}

function clear_content(){
    $(document.body).on("click", "#btn_clear", function(){
        $(".content").html("");
    });    
}

function post_request_to_endoint_django(){
    $(document.body).on("click", "#btn_request", function(){
        console.log("send: " + $("input[name=csrfmiddlewaretoken]").val());
        $.ajax({
            type: "post",
            url: "/app_test_endpoint/get_users",
            data: {get_users: "ok", csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val()},
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