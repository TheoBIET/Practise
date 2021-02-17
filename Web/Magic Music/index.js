var bg = $("#particles-js");

$(document).keydown(function(){
   $(bg).css("background-color",getRandomColor);
});

$(".img").on("click",function(){
    //PREMIERE ACTION
    var name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalized = initiale + name.slice(1);
    $("#titre").text(nameCapitalized);
    
    //DEUXIEME ACTION
    
    $(this).toggleClass("flash");
    
    //TROISIEME ACTION
    
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
    
    
    
});
$("#btn").click(function(){
    var artiste = $("#input").val();
    var music = artiste + ".mp3";
    playMusic(music);
});


function playMusic(music){
    var audio = new Audio(music);
    audio.play();
}

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}