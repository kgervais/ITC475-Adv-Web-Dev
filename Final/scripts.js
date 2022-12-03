const stopRace = "stop.png";
const startRace = "go.png";

var finishLine = (window.innerWidth - (window.innerWidth * 0.20));
var declareWinner = false;
var nyanWin= document.getElementById('nyanWin');
var pusheenWin= document.getElementById('pusheenWin');
var hamtaroWin= document.getElementById('hamtaroWin');
var booWin= document.getElementById('booWin');
var raceButton = document.getElementById('raceButton');

var selectedRacers = [];

function ChangeLightColor() {
    var raceLight = document.getElementById("raceLight");
    var raceLightSrc = raceLight.getAttribute("src");
    if (raceLightSrc == startRace) {
        raceLight.src = stopRace;
        StartRace();
    } else if (raceLightSrc == stopRace) {
        raceLight.src = startRace;
        nyanWin.style.visibility="hidden";
        pusheenWin.style.visibility="hidden";
        hamtaroWin.style.visibility="hidden";
        booWin.style.visibility="hidden";

        ResetRace();
    }
}

/*Race Starts*/
function StartRace() {
    declareWinner = false;
    ZoomZoom("nyan");
    ZoomZoom("pusheen");
    ZoomZoom("hamtaro");
    ZoomZoom("boo");

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
            if(racerId == "nyan") {
              nyanWin.style.visibility="visible";
            }
            if(racerId == "hamtaro") {
                hamtaroWin.style.visibility="visible";
              }
            if(racerId == "boo") {
                booWin.style.visibility="visible";
              }
            else {
              pusheenWin.style.visibility="visible";
            }
            declareWinner = true;
            var winnerImg = document.getElementById(racerId);
            winnerImg.addEventListener("click", ChangeLightColor);
        }
    }
  }

    /*    Reset race */
    function ResetRace() {
        ResetRacer("nyan");
        ResetRacer("pusheen");
        ResetRacer("hamtaro");
        ResetRacer("boo");

    }

    function ResetRacer(racerId) {
        var racer = document.getElementById(racerId);
        racer.style.left = 0 + "px";
        racer.removeEventListener("click",  ChangeLightColor);
    }


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addRacer(racer){

    const index = selectedRacers.indexOf(racer)
    if (index > -1) {
        // Already exists, remove the racer
        selectedRacers.splice(index, 1);
    }
    else
    {
        // Add the racer if less than 2 racers are selected
        if(selectedRacers.length < 2)
        {
            selectedRacers.push(racer);
        }
    }

    //Set the race button to enabled or disabled based on the number of racers selected
    if(selectedRacers.length == 2)
    {
        raceButton.removeAttribute('disabled');
    }
    else
    {
        raceButton.setAttribute('disabled',true);
    }
    console.log(selectedRacers);
}

function raceSetUp(){
    window.location.href = "race.html";
}

    