const stopRace = "stop.png";
const startRace = "go.png";

var finishLine = (window.innerWidth - (window.innerWidth * 0.20));
var declareWinner = false;
var winner = document.getElementById('winner');
var raceButton = document.getElementById('raceButton');

var selectedRacers = [localStorage.getItem("chosenRacer1"), localStorage.getItem("chosenRacer2")];

displayRacerOnRoad(selectedRacers[0],document.getElementById("racer1"));
displayRacerOnRoad(selectedRacers[1],document.getElementById("racer2"));

function ChangeLightColor() {
    var raceLight = document.getElementById("raceLight");
    var raceLightSrc = raceLight.getAttribute("src");
    if (raceLightSrc == startRace) {
        raceLight.src = stopRace;
        StartRace();
    } else if (raceLightSrc == stopRace) {
        raceLight.src = startRace;
        winner.style.visibility="hidden";
        ResetRace();
    }
}

/*Race Starts*/
function StartRace() {
    declareWinner = false;
    ZoomZoom("racer1");
    ZoomZoom("racer2");
}

function ZoomZoom(racerId) {
    var racer = document.getElementById(racerId);
    var position = parseInt(racer.style.left, 10);
    if (isNaN(position)) {
        position = 0;
    }

    if (position < finishLine && !declareWinner) {
        position += randomNumber(1, 10);
        racer.style.left = position + "px";
        setTimeout('ZoomZoom("'+ racerId +'")', randomNumber(1, 10));
    }
     else {
        if (position >= finishLine && !declareWinner) {
            if(racerId == "racer1") {
                winner.src = selectedRacers[0]+"win.png";
            }
            if(racerId == "racer2") {
                winner.src = selectedRacers[1]+"win.png";
            }
            winner.style.visibility="visible";
            declareWinner = true;
            var winnerImg = document.getElementById(racerId);
            winnerImg.addEventListener("click", ChangeLightColor);
        }
    }
}

/*    Reset race */
function ResetRace() {
    ResetRacer("racer1");
    ResetRacer("racer2");
    window.location.href = "index.html";
}

function ResetRacer(racerId) {
    var racer = document.getElementById(racerId);
    racer.style.left = 0 + "px";
    racer.removeEventListener("click",  ChangeLightColor);
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function displayRacerOnRoad(racerName, racerImage)
{
    if(racerName == "boo")
    {
        racerImage.src = "boo.png";
    }
    else if(racerName == "hamtaro")
    {
        racerImage.src = "hamtaro.png";
    }
    else if(racerName == "nyan")
    {
        racerImage.src = "nyan2.png";
    }
    else if(racerName == "pusheen")
    {
        racerImage.src = "pusheen.png";
    }

}
    