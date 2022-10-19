var livingRoomLampOn = document.getElementById('livingRoomOn');
var livingRoomLampOff = document.getElementById('livingRoomOff');
var bedroom1On = document.getElementById('bedroom1On');
var bedroom1Off = document.getElementById('bedroom1Off');
var bedroom2On = document.getElementById('bedroom2On');
var bedroom2Off = document.getElementById('bedroom2Off');
var bathroomFanOn = document.getElementById('bathroomFanOn');
var bathroomFanOff = document.getElementById('bathroomFanOff');
var now = new Date ();
var showTime = document.getElementById('showTime');

showTime.innerHTML = getTime(now);

function runSimulation() {
    // Need to get time here and display it on the screen
    now = new Date ();
    showTime.innerHTML = getTime(now);

    // Initialize the display to show all devices off by default
    initializeDisplay();
    // Check one by one if device need to be on or off then show the correct graphic
}

function initializeDisplay() {
    // Set everything to OFF by default   
    livingRoomLampOn.style.visibility ="hidden";
    bedroom1On.style.visibility="hidden";
    bedroom2On.style.visibility="hidden";
    bathroomFanOn.style.visibility="hidden";
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
