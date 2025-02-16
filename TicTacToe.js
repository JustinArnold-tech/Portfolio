var turn = 1;
// Keeps track of turn and fuction for buttons
$("button").on("click", function(){
    if(turn === 1){
        $("#header2").text("Player Two's Turn");
    $(this).addClass("fa fa-times");
        turn = 2;
    }else{
        $("#header2").text("Player One's Turn");
        $(this).addClass("fa fa-circle-o");
        turn = 1;
    }

    // Player 1 logic
    if($("#b1").hasClass("fa fa-times") && $("#b2").hasClass("fa fa-times") && $("#b3").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b4").hasClass("fa fa-times") && $("#b5").hasClass("fa fa-times") && $("#b6").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b7").hasClass("fa fa-times") && $("#b8").hasClass("fa fa-times") && $("#b9").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b1").hasClass("fa fa-times") && $("#b4").hasClass("fa fa-times") && $("#b7").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b2").hasClass("fa fa-times") && $("#b5").hasClass("fa fa-times") && $("#b8").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b3").hasClass("fa fa-times") && $("#b6").hasClass("fa fa-times") && $("#b9").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b1").hasClass("fa fa-times") && $("#b5").hasClass("fa fa-times") && $("#b9").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }else if($("#b3").hasClass("fa fa-times") && $("#b5").hasClass("fa fa-times") && $("#b7").hasClass("fa fa-times")){
        $("#header2").text("Player One Won");
    }
    // Player 2 logic
    if($("#b1").hasClass("fa fa-circle-o") && $("#b2").hasClass("fa fa-circle-o") && $("#b3").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b4").hasClass("fa fa-circle-o") && $("#b5").hasClass("fa fa-circle-o") && $("#b6").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b7").hasClass("fa fa-circle-o") && $("#b8").hasClass("fa fa-circle-o") && $("#b9").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b1").hasClass("fa fa-circle-o") && $("#b4").hasClass("fa fa-circle-o") && $("#b7").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b2").hasClass("fa fa-circle-o") && $("#b5").hasClass("fa fa-circle-o") && $("#b8").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b3").hasClass("fa fa-circle-o") && $("#b6").hasClass("fa fa-circle-o") && $("#b9").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b1").hasClass("fa fa-circle-o") && $("#b5").hasClass("fa fa-circle-o") && $("#b9").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }else if($("#b3").hasClass("fa fa-circle-o") && $("#b5").hasClass("fa fa-circle-o") && $("#b7").hasClass("fa fa-circle-o")){
        $("#header2").text("Player Two Won");
    }
})

$("#reset").on("click", function(){
    $("button").removeClass("fa fa-circle-o");
    $("button").removeClass("fa fa-times");
    $("#header2").text("Player One's Turn");
    turn = 1
})


