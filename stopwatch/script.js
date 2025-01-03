window.onload = function(){
    let seconds = "00";
    let tens = "00";
    let outputSecond = document.getElementById("seconds");
    let outputTens = document.getElementById("tens");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");
    let interval;

    buttonStart.addEventListener('click', () => {
        interval = setInterval(startTimer, 10);
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(interval);
        tens="00";
        seconds="00";
        outputTens.innerHTML=tens;
        outputSecond.innerHTML=seconds;
    });

    function startTimer(){
        tens++;
        if(tens<=9){
            outputTens.innerHTML = "0" + tens;
        }

        if(tens>9){
            outputTens.innerHTML=tens;
        }

        if(tens>99){
            seconds++;
            outputSecond.innerHTML = "0" + seconds;
            tens = 0;
            outputTens.innerHTML = tens;
        }

        if(seconds>9){
            outputSecond.innerHTML=seconds;
        }
    }


}