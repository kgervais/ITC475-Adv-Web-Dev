var now = new Date();
var welcomeGreeting = document.getElementById('welcomeGreeting');
var welcomeTime = document.getElementById('welcomeTime');

welcomeGreeting.innerHTML = getGreeting(now);
welcomeTime.innerHTML = getIcon(now) + ' ' + getTime(now);

setInterval(clock, 1000);

function clock() {
    now = new Date();
    welcomeGreeting.innerHTML = getGreeting(now);
    welcomeTime.innerHTML = getIcon(now) + ' ' + getTime(now);
}

function getIcon(date) {
    var hours = date.getHours();
    var min = date.getMinutes();

    if(hours < 6) {
        return '<i class="fa-regular fa-moon"></i>';
    } else if(hours < 18) {
        return '<i class="fa-regular fa-sun"></i>';
    } else {
        return '<i class="fa-regular fa-moon"></i>';
    }
}

function getGreeting(date) {
    if(date.getHours() < 12) {
        return 'Good Morning'
    } else if(date.getHours() < 18) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
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