document.getElementById('heading').addEventListener('click', function() {
    alert('Вы кликнули на заголовок - так держать!');
});

document.getElementById('change-practices').addEventListener('click', function() {
    const practices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    const tbody = document.querySelector('#practices-table tbody');
    tbody.innerHTML = ''; 

    practices.forEach(function(practice) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = practice;
        row.appendChild(cell);
        tbody.appendChild(row);
    });
});