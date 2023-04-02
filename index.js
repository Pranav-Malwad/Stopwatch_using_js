let hour = 0;
let min = 0 ;
let sec = 0;
let count = 0;
// count is for mili seconds


let timer = false;



function start(){
timer = true;
stopwatch();
}


function stop(){
timer = false;
}


function reset () {
timer= false;
hour = 0; 
min =0; 
sec = 0; 
count = 0;
document.getElementById("hr").innerHTML = "00";
// hr is the id for the hour
document.getElementById("min").innerHTML = "00";
document.getElementById("sec").innerHTML = "00";
document.getElementById("count").innerHTML = "00";

}




function stopwatch (){
if (timer== true){
    count = count +1;  
    // count is increasing for the mili seconds

if (count==100){
    sec = sec+1;
    count= 0;
}


if (sec==60){
    min = min +1;
    sec = 0;
}

if ( min == 60 ){
    hour = hour +1;
    min = 0;
    sec = 0;
}

    let hourString = hour ;
    let minString = min ;
    let secString = sec; 
    let countString = count; 
    
    if (hour<10){
        hourString = "0" + hourString;
    }

    if (min<10){
        minString = "0" + minString;
    }


    if (sec<10){
        secString = "0" + secString;
    }

    if (count<10){
        countString = "0" + countString;
    }


    document.getElementById("hr").innerHTML = hourString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;



    setTimeout( "stopwatch()",10)
}
}