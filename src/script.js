$(document).ready(function () {
    $("#toggle-sidebar").click(function () {
        $(".sidebar").toggleClass("close");

    });

    $(".dropdown").click(function () {
        $(".dropdown-items").toggleClass("h-full h-0");

    });

});

