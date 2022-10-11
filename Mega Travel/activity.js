var destination = document.getElementById('destination');
var activity = document.getElementById('activity');

var newzealand = ['City Tours','Sports','Cycling','Museums','Boating'];
var maldives = ['Museums','Sailing','Beach','Hiking','Boating'];
var venice = ['Museums','Theatre','Parks and Recreation','City Tours'];
var cancun = ['Parks and Recreation','Beaches','Boating','Snorkeling'];

destination.onchange = function() {
    var d = this.value;
    var html = '';

    switch(this.value) {
        case 'newzealand':
            html = cBox(newzealand);
            break;
        case 'maldives':
            html = cBox(maldives);
            break;
        case 'venice':
            html = cBox(venice);
            break;
        case 'cancun':
            html = cBox(cancun);
            break;
    }

    activity.innerHTML = html;

}

function cBox(arr) {
    var html = '<div style="margin-top: 5px; margin-bottom:5px; font-weight: bold;">Desired Activities</div>';

    arr.forEach(function(item, i) {
        var n = i + 1;
        html += '<input type="checkbox" id="activity' + n + '" value="' + item + '">';
        html += '<label for="activity' + n + '"> ' + item + '</label><br>';
    });

    return html;
}