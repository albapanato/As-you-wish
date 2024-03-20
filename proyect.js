import { characters } from './characters.js';

var characterNow = 0;

function showData() {
    var info = characters[characterNow];
    const photo = info.img;
    document.getElementById("name").textContent = " Name: " + info.name;
    document.getElementById("race").textContent = " Race: " + info.race;
    document.getElementById("skill").textContent = " Skill: " + info.skill;
    document.getElementById("quote").textContent = " Quote: " + info.quote;
    document.getElementById("photo").src = photo;
}

document.getElementById("buttonNext").addEventListener("click", function () {
    characterNow++;
    if (characterNow >= characters.length) {
        characterNow = 0;

    }
    showData();
});

document.getElementById("buttonBack").addEventListener("click", function () {
    characterNow--;
    if (characterNow < 0) {
        characterNow = characters.length - 1;

    }
    showData();
});

showData();

var video = document.getElementById("video-background");
video.playbackRate = 0.6;

// var video = document.getElementById("video-front-page");
// video.playbackRate = 0.3;