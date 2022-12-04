var raceButton = document.getElementById('raceButton');

var selectedRacers = [];

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
    localStorage.setItem("chosenRacer1", selectedRacers[0]);
    localStorage.setItem("chosenRacer2",selectedRacers[1]);
    window.location.href = "race.html";
}