//Copyright © 2015 ryo.ogata All Rights Reserved.
//This website is made for a school project


// Sound path of the sound
var SOUND_PATH = "sound/";

// Get the sound file that is available for each browser
var AUDIO_EXT = (function () {

    // Define the suitable sound file
    var audio = new Audio();
    var ext = "";

    if (audio.canPlayType("audio/ogg") == 'maybe') {
        ext = "ogg";
    } else if (audio.canPlayType("audio/mp3") == 'maybe') {
        ext = "mp3";
    } else if (audio.canPlayType("audio/wav") == 'maybe') {
        ext = "wav";
    }

    return ext;
})();

// check the available file
console.log("This browser supports '" + AUDIO_EXT + "'.");

// Play the sound function
var play = function (element) {

    // Get the name of the button
    var name = element.getAttribute("name");

    // Absolute path of the sound file
    var file_path = '../' + SOUND_PATH + name + '.' + AUDIO_EXT;

    // Create the sound element
    var audio = new Audio(file_path);

    // Play the sound!
    audio.play();

    //Check the work
    //console.log(file_path);

};


// Play the sound from the keyboard function
window.onload = function () {

    // Get the keyboard element
    var keyboards = document.getElementsByClassName("keyboard");

    // Key list
    var key_list = [
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
        'W', 'E', 'None', 'T', 'Y', 'U'
    ];

    var key_map = {};
    for (var i = 0; i < key_list.length; ++i) {
        key_map[key_list[i]] = keyboards[i];
    }



    // Operate the following when a key is pressed
    document.onkeypress = function (event) {
        // Change the charcode into a character
        var key = String.fromCharCode(event.charCode);
        // Capitalize
        key = key.toUpperCase();
        // Play the sound, when there is a corresponding element


        if (key_map[key]) {
            
            play(key_map[key]);
            
            var pianomode = /piano/g;
            var string = location.href;
            //if (pianomode.test(string) !== true ) {
            
            game(key_map[key]);
            
            //}
        }
    };


};


//count the order
var count = 0;
var start;

var song;

var easy = ['C3', 'D3', 'E3', 'F3', 'E3', 'D3', 'C3',
    'E3', 'F3', 'G3', 'A3', 'G3', 'F3', 'E3',
    'C3', 'C3', 'C3', 'C3',
    'C3', 'C3', 'D3', 'D3', 'E3', 'E3', 'F3', 'F3',
    'E3', 'D3', 'C3'
];

var hard = ['C3', 'C3', 'D3', 'C3', 'F3', 'E3',
    'C3', 'C3', 'D3', 'C3', 'G3', 'F3',
    'C3', 'C3', 'C4', 'A3', 'F3', 'E3', 'D3',
    'pA3', 'pA3', 'A3', 'F3', 'G3', 'F3'
];

var scorenum;


//function for the song
var game = function (element) {
    var name = element.getAttribute("name");
    // order of the song
    var str = location.href;
    var easymode = /easy/g;
    var hardmode = /hard/g;
    if (easymode.test(str) === true) {
        song = easy;
        scorenum = 28;

    } else if (hardmode.test(str) === true) {
        song = hard;
        scorenum = 24;
    }

    if (name == song[count]) {
        if (count === 0) {
            start = new Date().getTime();
        }

        console.log(count);

        // Alert the message to the corresponding count value


        if (count == scorenum) { //The end of the song
            var end = new Date().getTime();
            var time = (end - start) / 1000;
            time = Math.round(time * 100) / 100;
            var message = "";
            if (time < 10) { //If the time is less than 10 seconds, alerts congratulation
                message = "CONGRATULATION!";
            } else {
                message = "GOOD LUCK IN THE NEXT GAME!";
            }
            alert("Your time is " + time + " seconds!\n \n" + message);

            count = 0;
            //console.log(start);
            //console.log(end);
        } else {
            count = count + 1;
        }
    } else {
        alert("GAME OVER! \n \nRESTART AGAIN!");
        count = 0;
    }
};