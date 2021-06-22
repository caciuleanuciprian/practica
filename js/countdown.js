// Initialize Curent Date //

let CurrentDate = new Date();

// Initialize Christmas Date //

const ChristmasDate = new Date('August 19, 2021 08:00:00')

// Update Date every seconds (1000ms) //
function updateDate(){
    CurrentDate = new Date();
    let Miliseconds = ChristmasDate - CurrentDate;

    // Storing Date //

    const Seconds = Math.ceil(Miliseconds / 1000 % 60);
    const Minutes = Math.trunc(Miliseconds / 1000 / 60 % 60);
    const Hours = Math.trunc(Miliseconds / 1000 / 60 / 60 / 24 % 24);
    const Days = Math.trunc(Miliseconds / 1000 / 60 / 60 / 24);

    // Formating Date //

    if(Seconds < 10){
        document.getElementById('seconds').innerHTML = '0' + Seconds;
    }else{
        document.getElementById('seconds').innerHTML = Seconds; 
    }

    if(Minutes < 10){
        document.getElementById('minutes').innerHTML = '0' + Minutes;
    }else{
        document.getElementById('minutes').innerHTML = Minutes; 
    }

    if(Hours < 10){
        document.getElementById('hours').innerHTML = '0' + Hours;
    }else{
        document.getElementById('hours').innerHTML = Hours; 
    }

    if(Days < 10){
        document.getElementById('days').innerHTML = '0' + Days;
    }else{
        document.getElementById('days').innerHTML = Days; 
    }

    // Looping update function with 1 second delay (1000 ms) //

    setTimeout(updateDate, 1000)
}

// Calling the function //

updateDate();