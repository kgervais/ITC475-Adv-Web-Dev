//Kayla Gervais
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
var simulationRunning = false;
var deviceOnElementArray = [livingRoomLampOn, bedroom1On, bedroom2On, bathroomFanOn,
                            washerOn, dryerOn, fdoorLock, bdoorLock, garageLock, fanOn,
                            diningOn];
var deviceOffElementArray = [livingRoomLampOff, bedroom1Off, bedroom2Off, bathroomFanOff,
                            washerOff, dryerOff, fdoorUnlock, bdoorUnlock, garageUnlock, fanOff,
                            diningOff];
                                                        
var startTimeArray = JSON.parse(localStorage.getItem('startTimes'));
var endTimeArray = JSON.parse(localStorage.getItem('endTimes'));
if (startTimeArray == null) startTimeArray = Array(11);
if (endTimeArray == null) endTimeArray = Array(11);

showTime.innerHTML = getTime(now);

setInterval(clock, 1000);

function clock () {
    if(simulationRunning) {
        now = new Date ();
        showTime.innerHTML = getTime(now);
        updateDevices(now);
    }
}

function runSimulation() {
    simulationRunning = true;    
    showTime.style.visibility="visible";
}

// get time in 24 hour format HH:MM
function getTime(date) {
    var hour, min;

    hour = date.getHours();
    if(hour < 10) { hour = '0' + hour; }
    min  = date.getMinutes();
    if(min < 10) { min = '0' + min; }

    return hour + ':' + min;
}

function updateDevices (date) {
    for(let ii = 0; ii < 11; ii++)
    {
        // Turn on when current time is between start time and end time
        if((getTime(date) >= startTimeArray[ii]) && (getTime(date) < endTimeArray[ii]) &&
            startTimeArray[ii] != '' && endTimeArray[ii] != '')
        {
            deviceOnElementArray[ii].style.visibility = "visible";
            deviceOffElementArray[ii].style.visibility = "hidden";
        }
        else
        {
            deviceOnElementArray[ii].style.visibility = "hidden";
            deviceOffElementArray[ii].style.visibility = "visible";
        }
    }
}