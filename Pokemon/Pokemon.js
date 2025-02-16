function showSquirtleAlert(){
    document.getElementById("Header").innerText = "This is the Water starter";
}

function showBulbasaurAlert(){
    document.getElementById("Header").innerText = "This is the Grass starter";
}

function showCharmanderAlert(){
    document.getElementById("Header").innerText = "This is the Fire starter";
}

function squirtle(){
    document.getElementById("pokemonPic").src = "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2021/02/squ-squirtle.jpg";
    document.getElementById("pokeball1").src = "Popen2.png";
    document.getElementById("Header").innerText = "Squirtle";
}

function bulbasaur(){
    document.getElementById("pokemonPic").src = "https://twinfinite.net/wp-content/uploads/2019/11/bulbasaur.jpg";
    document.getElementById("pokeball2").src = "Popen2.png";
    document.getElementById("Header").innerText = "Bulbasaur";
}

function charmander(){
    document.getElementById("pokemonPic").src = "https://pbs.twimg.com/profile_images/1377854248621199360/F7S8p4xK.jpg";
    document.getElementById("pokeball3").src = "Popen2.png";
    document.getElementById("Header").innerText = "Charmander";
}