const form = document.getElementById('form');
const btn = document.getElementById("button-post");
const name = document.getElementById("input-name");
const email = document.getElementById("input-email");
const tel = document.getElementById("input-tel");
const date = document.getElementById("input-date");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", ()=>{
    if (checkbox.checked){
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", true);
    }
})

form.addEventListener("submit", function(){
    let error = true;
    if (name.value == ''){
        alert("Введите имя");
        error = false;
    }
    if (email.value == ''){
        alert("Введите адрес электронной почты");
        error = false;
    }
    if (tel.value == ''){
        alert("Введите номер телефона");
        error = false;
    }
    if (date.value == ''){
        alert("Введите дату");
        error = false;
    }
    
})