document.addEventListener('DOMContentLoaded', function () {
    // Слушатель события для изменения состояния чекбокса
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Выводим в консоль информацию о статусе чекбокса
            if (checkbox.checked) {
                console.log('Чекбокс отмечен');
            } else {
                console.log('Чекбокс снят');
            }
        });
    });

    // Слушатель для кнопки 'Навигация'
    const navigationLinks = document.querySelectorAll('.nav-link');
    
    navigationLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Для каждого клика по ссылке выводим информацию в консоль
            console.log(`Вы перешли на: ${event.target.textContent}`);
        });
    });

    // Пример динамического изменения контента
    const changeSemesterButton = document.createElement('button');
    changeSemesterButton.classList.add('btn', 'btn-primary');
    changeSemesterButton.textContent = 'Переключить семестр';

    changeSemesterButton.addEventListener('click', function () {
        const semesterHeading = document.querySelector('h2');
        if (semesterHeading.textContent === 'Первый семестр') {
            semesterHeading.textContent = 'Второй семестр';
        } else {
            semesterHeading.textContent = 'Первый семестр';
        }
    });

    // Добавляем кнопку на страницу (например, в конец контейнера)
    document.querySelector('.container-fluid').appendChild(changeSemesterButton);
});
