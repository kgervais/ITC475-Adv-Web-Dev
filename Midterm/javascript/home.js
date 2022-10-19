var livingRoomLampOn = document.getElementById('livingRoomOn');
var livingRoomLampOff = document.getElementById('livingRoomOff');
var bedroom1On = document.getElementById('bedroom1On');
var bedroom1Off = document.getElementById('bedroom1Off');
var bedroom2On = document.getElementById('bedroom2On');
var bedroom2Off = document.getElementById('bedroom2Off');
var bathroomFanOn = document.getElementById('bathroomFanOn');
var bathroomFanOff = document.getElementById('bathroomFanOff');
var washerOff = document.getElementById('washerOff');
var washerOn = document.getElementById('washerOn');
var dryerOff = document.getElementById('dryerOff');
var dryerOn = document.getElementById('dryerOn');
var fdoorUnlock = document.getElementById('fdoorUnlock');
var fdoorLock = document.getElementById('fdoorLock');
var bdoorUnlock = document.getElementById('bdoorUnlock');
var bdoorLock = document.getElementById('bdoorLock');
var garageUnlock = document.getElementById('garageUnlock');
var garageLock = document.getElementById('garageLock');
var fanOff = document.getElementById('fanOff');
var fanOn = document.getElementById('fanOn');
var diningOff = document.getElementById('diningOff');
var diningOn = document.getElementById('diningOn');
var now = new Date ();
var showTime = document.getElementById('showTime');

showTime.innerHTML = getTime(now);

setInterval(clock, 1000);

function clock () {
    now = new Date ();
    showTime.innerHTML = getTime(now);
}

function runSimulation() {    
    showTime.style.visibility="visible";
    // Initialize the display to show all devices off by default
    initializeDisplay();
    // Check one by one if device need to be on or off then show the correct graphic
}

function initializeDisplay() {
    // Set everything to OFF by default   
    livingRoomLampOff.style.visibility ="visible";
    bedroom1Off.style.visibility="visible";
    bedroom2Off.style.visibility="visible";
    bathroomFanOff.style.visibility="visible";
    washerOff.style.visibility="visible";
    dryerOff.style.visibility="visible";
    fdoorUnlock.style.visibility="visible";
    bdoorUnlock.style.visibility="visible";
    garageUnlock.style.visibility="visible";
    fanOff.style.visibility="visible";
    diningOff.style.visibility="visible";
}


function getTime(date) {
    var hour, min, ampm;

    if(date.getHours() <= 11) {
        hour = date.getHours();
        ampm = 'AM';
    } else {
        hour = date.getHours() - 12;
        ampm = 'PM';
    }
    if(hour==0) { hour = 12; }

    min  = date.getMinutes();
    if(min < 10) { min = '0' + min; }

    return hour + ':' + min + ' ' + ampm;
}
