var cards = ["php.png", "js.png", "html.png", "html.png", "c.png", "css.png", "js.png", "python.png", "php.png", "css.png", "python.png", "c.png"];


var card0 = document.getElementById("card0");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");

var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");

var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var card10 = document.getElementById("card10");
var card11 = document.getElementById("card11");


card0.addEventListener("click", function() { reveal(0); });
card1.addEventListener("click", function() { reveal(1); });
card2.addEventListener("click", function() { reveal(2); });
card3.addEventListener("click", function() { reveal(3); });

card4.addEventListener("click", function() { reveal(4); });
card5.addEventListener("click", function() { reveal(5); });
card6.addEventListener("click", function() { reveal(6); });
card7.addEventListener("click", function() { reveal(7); });

card8.addEventListener("click", function() { reveal(8); });
card9.addEventListener("click", function() { reveal(9); });
card10.addEventListener("click", function() { reveal(10); });
card11.addEventListener("click", function() { reveal(11); });

var one = false;
var counter = 0;
var visible_nr;
var lock = false;
var left = 6;

function reveal(nr){

    var opacityValue = $("#card" + nr).css("opacity");

    if(opacityValue != 0 && lock == false){
        lock = true;

        var image = "url(img/"+ cards[nr] + ")";

        $("#card"+nr).css("background-image", image);
        $("#card"+nr).addClass("cardA");
        $("#card"+nr).removeClass("card");

            if(one == false){

                one = true;
                visible_nr = nr;
                lock= false;
            }
            else
            {
                if(cards[visible_nr] == cards[nr]){
                    setTimeout(function() { hidecards(nr, visible_nr) }, 750);
                    
                }
                else{

                    setTimeout(function() { restorecards(nr, visible_nr) }, 1000);

                }

        counter++;
        $(".score").html("You tried: " + counter + " times.");
        one = false;
    }
    }  
} 
function hidecards(nr1, nr2){
    $("#card" + nr1).css("opacity", "0");
    $("#card" + nr2).css("opacity", "0");
    left--;

    if(left == 0){

        $(".board").html("<h1>You win!</br>Your score :"+ counter +"</br> Congratulations!</h1>");

    }
    lock = false;
    


}
function restorecards(nr1, nr2){
    $("#card"+nr1).css("background-image", "url(img/basic.png)");
    $("#card"+nr1).addClass("card");
    $("#card"+nr1).removeClass("cardA");

    $("#card"+nr2).css("background-image", "url(img/basic.png)");
    $("#card"+nr2).addClass("card");
    $("#card"+nr2).removeClass("cardA");
    lock = false;
}