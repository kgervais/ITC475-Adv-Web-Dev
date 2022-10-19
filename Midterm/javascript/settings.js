//Kayla Gervais
const deviceDropDown = document.getElementById('chooseDevice');
const startTimeField = document.getElementById('startTime');
const endTimeField = document.getElementById('endTime');

var selectedDevice;
var startTime;
startTime = JSON.parse(localStorage.getItem('startTimes'));
if(startTime == null)
{
    startTime = Array(11);
}
var endTime;
endTime = JSON.parse(localStorage.getItem('endTimes'));
if(endTime == null)
{
    endTime = Array(11);
}
function SelectedDeviceChanged () {
    selectedDevice = deviceDropDown.value;
    if(startTime[selectedDevice] != undefined)
    {
        startTimeField.value = startTime[selectedDevice];
    }
    else
    {
        startTimeField.value = startTime[selectedDevice] = '';
    }
    if(endTime[selectedDevice] != undefined)
    {
        endTimeField.value = endTime[selectedDevice];
    }
    else
    {
        endTimeField.value = startTime[selectedDevice] = '';
    }
}

function StartTimeChanged () {
    startTime[selectedDevice] = startTimeField.value;
}

function EndTimeChanged () {
    endTime[selectedDevice] = endTimeField.value;
}

// Clear all data on form
function clearAll () {
    for(let ii = 0; ii < 11; ii++) {
        startTime[ii] = '';
        endTime[ii] = '';
    }
    startTimeField.value = startTime[selectedDevice] = '';
    endTimeField.value = startTime[selectedDevice] = '';
}

// Save settings to local storage
function saveSettings () {
    localStorage.setItem('startTimes', JSON.stringify(startTime));
    localStorage.setItem('endTimes', JSON.stringify(endTime));
}