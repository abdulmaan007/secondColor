const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = false;

updatebody()

function updatebody{
    if(inputEl.checked){
    bodyEl.style.background = "black"
    } else {
    bodyEl.style.background = "white"
    }
}

inputEl.addEventListener("input",()=>{
    updatebody();
})