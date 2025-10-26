const targetDate = new Date(`October 21, ${new Date().getFullYear() + 0} 23:59:59`).getTime();

        // Кэшируем DOM-элементы, чтобы не искать их на каждой секунде
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const messageEl = document.getElementById('countdown-message');

        // Функция для добавления ведущих нулей
        function formatTime(num) {
            return String(num).padStart(2, '0');
        }

        const countdown = () => {
            const now = new Date().getTime();
            const gap = targetDate - now; // Исправлено: использован правильный дефис

            // Если время истекло
            if (gap < 0) {
                clearInterval(countdownInterval); // Останавливаем таймер
                if (messageEl) {
                    messageEl.textContent = "Giveaway Ended!"; // Сообщение, когда время вышло
                    messageEl.style.color = '#ffcc00'; // Изменяем цвет
                }
                // Устанавливаем все значения в 00
                if (daysEl) daysEl.innerText = '00';
                if (hoursEl) hoursEl.innerText = '00';
                if (minutesEl) minutesEl.innerText = '00';
                if (secondsEl) secondsEl.innerText = '00';
                return; // Выходим из функции
            }

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(gap / day);
            const hours = Math.floor((gap % day) / hour);
            const minutes = Math.floor((gap % hour) / minute);
            const seconds = Math.floor((gap % minute) / second);

            // Обновляем текстовое содержимое элементов, используя formatTime
            // Проверяем существование элементов, чтобы избежать ошибок, если HTML не загружен
            if (daysEl) daysEl.innerText = formatTime(days);
            if (hoursEl) hoursEl.innerText = formatTime(hours);
            if (minutesEl) minutesEl.innerText = formatTime(minutes);
            if (secondsEl) secondsEl.innerText = formatTime(seconds);
        };

        // Запускаем таймер
        // Используем document.addEventListener('DOMContentLoaded', ...)
        // чтобы убедиться, что DOM полностью загружен перед поиском элементов
        let countdownInterval; // Объявляем переменную для интервала
        document.addEventListener('DOMContentLoaded', () => {
            countdown(); // Первый вызов для немедленного отображения
            countdownInterval = setInterval(countdown, 1000); // Запускаем интервал
        });
