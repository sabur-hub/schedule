window.addEventListener('DOMContentLoaded', function () {
    var blocks = document.querySelectorAll('.block');
    var restDayMessage = document.getElementById('restDayMessage');
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); // 0 - Воскресенье, 1 - Понедельник, ..., 6 - Суббота

    // Цвета для каждого дня недели
    var colors = ['#FC926D', '#FCCE6D', '#8A6DFC', '#74FC6D', '#6D97FC', '#6DFCFA', '#ffffff']; // Белый цвет для воскресенья

    // В зависимости от текущего дня недели применяем стиль к соответствующему блоку
    if (currentDay === 0) {
        restDayMessage.style.display = 'block';
    } else {
        blocks[currentDay - 1].style.backgroundColor = colors[currentDay - 1]; // Устанавливаем цвет для текущего дня
    }

    // Обработчики событий для кнопок и модального окна
    var darkModeToggle = document.getElementById('darkModeToggle');
    var authorInfoButton = document.getElementById('authorInfoButton');
    var authorInfoModal = document.getElementById('authorInfoModal');
    var closeButton = document.getElementsByClassName('close')[0];

    // Обработчик клика для кнопки переключения в тёмный режим
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        updateDarkModeButtonText(); // Обновляем текст кнопки при переключении режима
    });

    // Обработчик клика для кнопки об авторе
    authorInfoButton.addEventListener('click', function () {
        authorInfoModal.style.display = 'block';
    });

    // Обработчик клика для кнопки закрытия модального окна
    closeButton.addEventListener('click', function () {
        authorInfoModal.style.display = 'none';
    });

    // Закрытие модального окна при клике за его пределами
    window.addEventListener('click', function (event) {
        if (event.target == authorInfoModal) {
            authorInfoModal.style.display = 'none';
        }
    });

    // Устанавливаем начальный текст кнопки
    function updateDarkModeButtonText() {
        var isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Ҳолати рӯшан' : 'Ҳолати торик';
    }
});
// service-worker.js

self.addEventListener('install', function(event) {
event.waitUntil(
    caches.open('cache').then(function(cache) {
    return cache.addAll([
        '/',
        '/meh.html',
    ]);
    })
);
});

self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
    })
);
});
