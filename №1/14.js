// Получаем элементы
const h1 = document.querySelector('h1');
const studentImage = document.getElementById('studentPhoto');

const paragraph = document.getElementById('animatedParagraph');

paragraph.addEventListener('click', () => {
    // Генерация случайного цвета
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    paragraph.style.backgroundColor = randomColor; // Изменение цвета фона
});

// Анимация заголовка H1
h1.addEventListener('mouseover', () => {
    h1.style.transition = 'transform 0.3s';
    h1.style.transform = 'scale(1.2)';
});

h1.addEventListener('mouseout', () => {
    h1.style.transform = 'scale(1)';
});



// Анимация фотографии студента
studentImage.addEventListener('mouseover', () => {
    studentImage.style.transition = 'transform 0.5s';
    studentImage.style.transform = 'rotate(360deg)';
});

studentImage.addEventListener('mouseout', () => {
    studentImage.style.transform = 'rotate(0deg)';
});