$(document).ready(function () {
    $("#panelzabav").click(function(){
        $("#navi5menu").slideToggle(600);
        var text = $(this).text();
        if(text == "ЗАТВОРИ НАВИГАЦИЯ"){
            $(this).text("ОТВОРИ НАВИГАЦИЯ");
        }
        else{
            $(this).text("ЗАТВОРИ НАВИГАЦИЯ");
        }
    })
});

$(document).ready(function () {
    $("#idbtngn").click(function(){
        $("#navi1").slideToggle(600);
        var text = $(this).text();
        if(text == "СКРИЙ НАВИГАЦИЯ"){
            $(this).text("ПОКАЖИ НАВИГАЦИЯ");
        }
        else{
            $(this).text("СКРИЙ НАВИГАЦИЯ");
        }
    })
});