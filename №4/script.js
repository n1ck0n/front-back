function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function updateH1FromUtm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1 = document.querySelector('h1');
    if (utmTerm && h1) {
        h1.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    console.log(timeString);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

showMessage("Скрипт загружен!");
logCurrentTime();
document.addEventListener('DOMContentLoaded', () => {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('.content');
    updateH1FromUtm();
});