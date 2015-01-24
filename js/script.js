//Copyright © 2015 ryo.ogata All Rights reserved
//This website is made for a school project

// General fadeIn and fadeOut for webpages
$(function() {

    $('.home').fadeIn(2000);

    $('.about').fadeIn(2000);

    $('.title').fadeIn(2000);

    $('.open').fadeIn(2000);

    $('.menu').fadeIn(2000);

    $('.logo').fadeIn(2000);

    $('.logo-piano').fadeIn(2000);

    $('.how-to-play').fadeIn(2000);

    $('.piano').fadeIn(2000);

    $('.code').fadeIn(2000);

});


//snowfall function
$(window).load(function() {
    $(document).snowfall({
        image: '../picture/img01.png',
        minSize: 50,
        maxSize: 100,
        flakeCount: 7,
        minspeed: 2,
        maxSpeed: 5
    });
});




//Function used to determine at which playing should jump
function mode() {
    var f = 'Unknown';
    var x = document.getElementsByName('game');
    var i = 0;

    while (i < x.length) {
        if (x[i].checked) {
            f = x[i].value;
        }

        i = i + 1;
    }

    if (f == 'Unknown') {
        var element = document.getElementById("sample");
        element.setAttribute("rel", "Error");

        //If the radio button is not checked, alerts error
        alert(element.getAttribute("rel") + "! Choose the playing mode!");
    } else {
        location.href = "game-" + f + ".html";
    }

    console.log(f);
}


//Function used for the submission of the rate
function submit() {
    var x = document.getElementById("name").value;
    var y = document.getElementById("rate").value;
    var yy = parseFloat(y);
    var z;

    if (yy < 3) {
        z = "Tell me how I can improve this game better!";
    } else {
        z = "I am glad that you enjoyed the game!";
    }

    alert(z + "\nThank you " + x + " for playing!");

    document.getElementById("thankyou").innerHTML = "<p>Thank you !</p>";
    document.getElementById("explaination").innerHTML = "";
    document.getElementById("button").innerHTML = "";

    console.log(x);
    console.log(yy);
    console.log(z);
}