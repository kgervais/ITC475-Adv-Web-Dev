const deviceDropDown = document.getElementById('chooseDevice');
const startTimeField = document.getElementById('startTime');
const endTimeField = document.getElementById('endTime');

var selectedDevice;
var startTime = Array(11);
var endTime = Array(11);

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

function onClear () {
    // clear all start and end times
}

function onSaveSettings () {
    // Save settings to local ??
}