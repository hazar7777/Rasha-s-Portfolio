let Display = document.getElementById('Display');
let Answer = document.getElementById('Answer');

function appendValue(value){
    Display.innerHTML+=value;
}

function clearDisplay(){
    Display.innerHTML = "";
}

function calculate(){
    let result = eval(Display.innerHTML);
    Answer.innerHTML = result;
}

function deleteLast(){
    Display.innerHTML = Display.innerHTML.substring(0, Display.innerHTML.length-1);
}