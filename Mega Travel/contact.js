var submit = document.getElementById('submitBtn');
var clear = document.getElementById('clear');
var form = document.getElementById('contact');
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var tAdult = document.getElementById('tAdult');
var tChild = document.getElementById('tChild');
var startDate = document.getElementById('startDate');
var endDate = document.getElementById('endDate');

clear.onclick = function () {
    activities.innerHTML = '';
}

submit.onclick = function() {

    if(!emptyFields()) return;

    if(!validDate()) return;
    
    if(!validNumber()) return;
    
    form.submit();
    
}


function emptyFields() {
    var error = 0;
    var inputs = document.querySelectorAll('input');
    for(const input of inputs) {
        if(input.value === '') error = 1;
    }
    if(!destination.value) error = 1;
    if(error) { alert('You must fill out all fields.'); return false; }
    return true;
}

function validDate() {

    if(!startDate.value) {
        alert('This is not a valid start date.');
        return false;
    }
    if(!endDate.value) {
        alert('This is not a valid end date.');
        return false;
    }

    var today = new Date();
    today = today.getFullYear() + 
        '-' + String(today.getMonth() + 1).padStart(2, '0') + 
        '-' + String(today.getDate()).padStart(2, '0');

    if(startDate.value <= today) {
        alert('Start date must be in the future.');
        return false;
    }
    if(startDate.value > endDate.value) {
        alert('This is not a valid end date.');
        return false;
    }

    return true;

}

function validNumber() {

    if(/[a-zA-Z]/.test(phone.value) && phone.value.length < 10) {
        alert('Invalid phone number.');
        return false;
    }

    return true;
}