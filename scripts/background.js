const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// Обновляем размеры при изменении окна
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

// Создаем массив точек
const numStars = 50; // Количество точек
const stars = [];

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5, // скорость по X
    vy: (Math.random() - 0.5) * 0.5, // скорость по Y
    size: Math.random() * 2 + 1 // размер точки
  });
}

// Анимация
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // полупрозрачный черный фон для эффекта "следа"
  ctx.fillRect(0, 0, width, height);

  for (let star of stars) {
    // Обновляем позицию
    star.x += star.vx;
    star.y += star.vy;

    // Если вышли за границы, меняем направление
    if (star.x < 0 || star.x > width) star.vx *= -1;
    if (star.y < 0 || star.y > height) star.vy *= -1;

    // Рисуем точку
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = 'grey';
    ctx.fill();
  }

 requestAnimationFrame(animate);
}

animate();