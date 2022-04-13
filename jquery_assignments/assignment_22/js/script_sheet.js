$(document).ready(function(){
    $("#button").click(function(){
        let val1 = $("input[type=text][name=first_name]").val();
        let val2 = $("input[type=text][name=last_name]").val();
        let val3 = $("input[type=text][name=favorite_anime]").val();

        $("#form-output-1").html(val1);
        $("#form-output-2").html(val2);
        $("#form-output-3").html(val3);
    });
});



