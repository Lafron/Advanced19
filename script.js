const main = document.querySelector("#animationDiv");
const pouse = document.querySelector("#pouse");
const reset = document.querySelector("#reset");

let colorIndex = 0;
let intervalId;
let active = false;


const colorAnimate = (active) => {
    if(active){
        colorIndex++; 

        intervalId = requestAnimationFrame(colorAnimate);

        if (colorIndex < 700){
            main.style.top = Math.floor(colorIndex / 2) +"px";
        }
        else{
            Pause(intervalId);          
        }     
    }
    else{
        Pause(intervalId);
    }
   
};

const Pause = intervalId => {
    cancelAnimationFrame(intervalId);
};


const Start = () => {
    if(active){
        active = false;
        Pause(intervalId);
    }
    else{
        active = true;
        colorAnimate(true);
    }
    
};

const returnToStart = () => {
    active = false;
    colorIndex = 0;
    cancelAnimationFrame(intervalId);
    main.style.top = 0;
};

pouse.addEventListener("click", Start);
reset.addEventListener("click", returnToStart);