$(document).ready(function () {
    $("#panel").click(function () {
        $("#menu").slideToggle(600);
        var text = $(this).text();
        if (text == "ПОКАЖИ") {
            $(this).text("СКРИЙ");
        } else {
            $(this).text("ПОКАЖИ");
        }
    })
});

$(document).ready(function () {
    $("#idbtngn").click(function () {
        $("#navi1").slideToggle(600);
        var text = $(this).text();
        if (text == "СКРИЙ НАВИГАЦИЯ") {
            $(this).text("ПОКАЖИ НАВИГАЦИЯ");
        } else {
            $(this).text("СКРИЙ НАВИГАЦИЯ");
        }
    })
});