var dice1 = "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif"
var dice2 = "https://etc.usf.edu/clipart/42100/42159/die_02_42159_lg.gif"
var dice3 = "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif"
var dice4 = "https://etc.usf.edu/clipart/42100/42161/die_04_42161_lg.gif"
var dice5 = "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif"
var dice6 = "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif"


die1RollCount = 0
player1 = 0
player1T = 0

$("#button1").on("click", () => { 
    var rng1 = Math.floor(Math.random() * 6) + 1;
    var player1Score = 0
    player1Score = player1Score + rng1;
    player1 = player1Score;
    player1T = player1 + player1T;
    die1RollCount += 1

    if(die1RollCount < 6){
        if(rng1 === 1){
            $("#dice1").attr("src", dice1);
            $("#DH1").text("ONE");
            
        }else if(rng1 === 2){
            $("#dice1").attr("src", dice2);
            $("#DH1").text("TWO");
            
        }else if(rng1 === 3){
            $("#dice1").attr("src", dice3);
            $("#DH1").text("THREE");
            
        }else if(rng1 === 4){
            $("#dice1").attr("src", dice4);
            $("#DH1").text("FOUR");
            
        }else if(rng1 === 5){
            $("#dice1").attr("src", dice5);
            $("#DH1").text("FIVE");
            
        }else if(rng1 === 6){
            $("#dice1").attr("src", dice6);
            $("#DH1").text("SIX");
        }
        $("#P1").text(player1T); 
        $("#DH3").text(player1+player2);
         
    }
    if (die1RollCount == 5 && die2RollCount == 5 && player1T > player2T){
        $("#Header").text("Player One Wins");
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T < player2T){
        $("#Header").text("Player Two Wins");
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T == player2T){
        $("#Header").text("Draw")
    }
});



die2RollCount = 0
player2 = 0
player2T = 0

$("#button2").on("click", () => { 
    var rng2 = Math.floor(Math.random() * 6) + 1;
    var player2Score = 0
    player2Score = player2Score + rng2;
    player2 = player2Score
    player2T = player2 + player2T;
    die2RollCount += 1
    
    if(die2RollCount < 6){
        if(rng2 === 1){
            $("#dice2").attr("src", dice1);
            $("#DH2").text("ONE");

            
        }else if(rng2 === 2){
            $("#dice2").attr("src", dice2);
            $("#DH2").text("TWO");
            
        }else if(rng2 === 3){
            $("#dice2").attr("src", dice3);
            $("#DH2").text("THREE");
            
        }else if(rng2 === 4){
            $("#dice2").attr("src", dice4);
            $("#DH2").text("FOUR");
            
        }else if(rng2 === 5){
            $("#dice2").attr("src", dice5);
            $("#DH2").text("FIVE");
            
        }else if(rng2 === 6){
            $("#dice2").attr("src", dice6);
            $("#DH2").text("SIX");
        }
        $("#P2").text(player2T); 
        $("#DH3").text(player1+player2);
        
    }
    if (die1RollCount == 5 && die2RollCount == 5 && player1T > player2T){
        $("#Header").text("Player One Wins")
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T < player2T){
        $("#Header").text("Player Two Wins")
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T == player2T){
        $("#Header").text("Draw")
    }
});




