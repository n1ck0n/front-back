// main

const btn_open1 = document.getElementById("card-button1");
const btn_open2 = document.getElementById("card-button2");
const btn_open3 = document.getElementById("card-button3");
const btn_open4 = document.getElementById("card-button4");
const btn_open5 = document.getElementById("card-button5");
const btn_open6 = document.getElementById("card-button6");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const cross = document.getElementById("cross");

btn_open1.onclick = ()=>{
    modal.style.display = "block";
}

btn_open2.onclick = ()=>{
    modal.style.display = "block";
}

btn_open3.onclick = ()=>{
    modal.style.display = "block";
}

btn_open4.onclick = ()=>{
    modal.style.display = "block";
}

btn_open5.onclick = ()=>{
    modal.style.display = "block";
}

btn_open6.onclick = ()=>{
    modal.style.display = "block";
}

cross.onclick = ()=>{
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// button & checkbox
const btn = document.getElementById("button-post");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", ()=>{
    if (checkbox.checked){
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", true);
    }
})
