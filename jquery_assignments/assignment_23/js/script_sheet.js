$(document).ready(function(){
    // document.getElementById("hello").innerText = "<span>Hello Pogi</span>";
        $("#button-on").click(function(){
            $("#body-tag").addClass("online")
            $("nav").addClass("navbar sticky-top navbar-expand navbar-dark ");
        });
        $("#button-off").click(function(){
            $("#body-tag").removeClass("online")
            $("nav").removeClass("navbar sticky-top navbar-expand navbar-dark bg-dark");
        });

        
    });