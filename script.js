const input = document.querySelector("#inputDiv > input[type='text']");
const paragraph = document.querySelector("#par1");

function debounce(func, timeout = 300){
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => { func(); }, timeout);
  };
}

function onKeyUp() { 
    paragraph.textContent = input.value;
 }
const printToPar = debounce(() => onKeyUp());

input.addEventListener("keyup", printToPar);