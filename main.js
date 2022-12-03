//links html to javascript 
const timer = document.querySelector('.watch .time');
const start_btn = document.getElementById('startTime');
const stop_btn = document.getElementById("stopTime");
const reset_btn = document.getElementById("resetTime");

let sec = 0;
let interval = null;

//button clicks 
start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)



//keeps time on timer 

function stopwatch() {
    sec++;  // increase by one 

    
    let hours = Math.floor(sec / 3600); // 3600 seconds in 1 hour
    let mins = Math.floor((sec-(hours * 3600)) / 60); // Math. floor rounds down and returns largest interger, sec divides by 60 to get minute 
    let secs = sec % 60; // modulo resets to equal secs  when sec is equal to 60

}

function start () {
    if (interval){
        return
    } ////if already running doesnt need to be started again 

    interval = setInterval(timer, 1000); //calls stopwatch function every 1000 milliseconds
}

function stop(){
    clearInterval(interval); //stops timer counting and stops start function
    interval = null; 
}

function reset(){
    stop(); //stops counting if just reset is clicked 
    sec = 0;
    timer.innertext = '00:00:00';
}

