const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('close-menu');

menuButton.addEventListener('click', function() {
  // Переключаем класс 'menu', чтобы показывать/скрывать его
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block'; // Показываем меню
  } else {
    menu.style.display = 'none'; // Скрываем меню
  }
});

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.style.display = 'none';
  }
});


closeButton.addEventListener('click', function() {
  menu.style.display = 'none'; // Скрываем меню

});



// script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('scroll-to-top');

    // Показать/скрыть кнопку в зависимости от прокрутки
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // Показывать кнопку, если прокрутка больше 200px
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    // Переход к верху страницы при клике на кнопку
    upArrow.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});
