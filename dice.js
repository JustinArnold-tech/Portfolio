die1RollCount = 0
player1 = 0
player1T = 0

document.querySelector("#button1").addEventListener("click", () => { 
    var rng1 = Math.floor(Math.random() * 6) + 1;
    var player1Score = 0
    player1Score = player1Score + rng1;
    player1 = player1Score;
    player1T = player1 + player1T;
    die1RollCount += 1

    if(die1RollCount < 6){
        if(rng1 === 1){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif";
            document.querySelector("#DH1").innerText = "ONE";
            
        }else if(rng1 === 2){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42159/die_02_42159_lg.gif";
            document.querySelector("#DH1").innerText = "TWO";
            
        }else if(rng1 === 3){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif";
            document.querySelector("#DH1").innerText = "THREE";
            
        }else if(rng1 === 4){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42161/die_04_42161_lg.gif";
            document.querySelector("#DH1").innerText = "FOUR";
            
        }else if(rng1 === 5){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif";
            document.querySelector("#DH1").innerText = "FIVE";
            
        }else if(rng1 === 6){
            document.querySelector("#dice1").src = "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif";
            document.querySelector("#DH1").innerText = "SIX";
        }
        document.querySelector("#P1").innerText = player1T; 
        document.querySelector("#DH3").innerText = (player1+player2);
         
    }
    if (die1RollCount == 5 && die2RollCount == 5 && player1T > player2T){
        document.querySelector("#Header").innerText = "Player One Wins"
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T < player2T){
        document.querySelector("#Header").innerText = "Player Two Wins"
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T == player2T){
        document.querySelector("#Header").innerText = "Draw"
    }
});



die2RollCount = 0
player2 = 0
player2T = 0

document.querySelector("#button2").addEventListener("click", () => { 
    var rng2 = Math.floor(Math.random() * 6) + 1;
    var player2Score = 0
    player2Score = player2Score + rng2;
    player2 = player2Score
    player2T = player2 + player2T;
    die2RollCount += 1
    
    if(die2RollCount < 6){
        if(rng2 === 1){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42158/die_01_42158_lg.gif";
            document.querySelector("#DH2").innerText = "ONE";

            
        }else if(rng2 === 2){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42159/die_02_42159_lg.gif";
            document.querySelector("#DH2").innerText = "TWO";
            
        }else if(rng2 === 3){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42160/die_03_42160_lg.gif";
            document.querySelector("#DH2").innerText = "THREE";
            
        }else if(rng2 === 4){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42161/die_04_42161_lg.gif";
            document.querySelector("#DH2").innerText = "FOUR";
            
        }else if(rng2 === 5){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42162/die_05_42162_lg.gif";
            document.querySelector("#DH2").innerText = "FIVE";
            
        }else if(rng2 === 6){
            document.querySelector("#dice2").src = "https://etc.usf.edu/clipart/42100/42164/die_06_42164_lg.gif";
            document.querySelector("#DH2").innerText = "SIX";
        }
        document.querySelector("#P2").innerText = player2T; 
        document.querySelector("#DH3").innerText = (player1+player2);
        
    }
    if (die1RollCount == 5 && die2RollCount == 5 && player1T > player2T){
        document.querySelector("#Header").innerText = "Player One Wins"
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T < player2T){
        document.querySelector("#Header").innerText = "Player Two Wins"
    }else if(die1RollCount == 5 && die2RollCount == 5 && player1T == player2T){
        document.querySelector("#Header").innerText = "Draw"
    }
});


    
    
    
         