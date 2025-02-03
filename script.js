window.addEventListener('DOMContentLoaded', function () {
    var blocks = document.querySelectorAll('.block');
    var restDayMessage = document.getElementById('restDayMessage');
    var currentDate = new Date();
    var currentDay = currentDate.getDay(); // 0 - Воскресенье, 1 - Понедельник, ..., 6 - Суббота

    if (currentDay === 0) {
        restDayMessage.style.display = 'block';
    } else {
        var todayBlock = blocks[currentDay - 1];
        todayBlock.classList.add('highlight');
        
        // Автоскролл до сегодняшнего дня
        todayBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Темный режим
    var darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        updateDarkModeButtonText();
    });

    function updateDarkModeButtonText() {
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Ҳолати рӯшан' : 'Ҳолати торик';
    }
});