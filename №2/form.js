
const h1 = document.querySelector('h1');
h1.textContent = "Добро пожаловать на наш сайт!";

const h2 = document.querySelector('h2');
h2.style.color = 'red';

const firstParagraph = document.querySelector('p');
firstParagraph.textContent = "Это новый текст параграфа.";

const video = document.querySelector('video'); 
if (video) {
    video.style.display = 'none';
}

const formData = {};

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('input-name').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const phone = document.getElementById('input-tel').value.trim();
    const date = document.getElementById('input-date').value;
    const comment = document.querySelector('.textarea').value.trim();

    if (!name || !email || !comment) {
        alert("Поля имя, email и комментарий не должны быть пустыми.");
        return;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        alert("Поле телефон должно содержать только цифры.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    formData.printData = function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    };

    formData.printData();
}

const form = document.getElementById('form');
const buttonPost = document.getElementById('button-post');

buttonPost.addEventListener('click', submitForm);



document.getElementById('button-post').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Форма отправлена!";
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('success');

    // Меняем цвет текста с анимацией
    setTimeout(() => {
        messageDiv.style.color = 'red'; // Меняем цвет текста через 1 секунду
    }, 1000);
});