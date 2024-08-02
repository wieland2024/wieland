const users = {
  "111": "222",
  "user2": "password2",
  "user3": "password3",
  "user4": "password4",
  "user5": "password5",
  "user6": "password6",
  "user7": "password7",
  "user8": "password8",
  "user9": "password9",
  "user10": "password10"
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (users[login] === password) {
    console.log('Правильный логин и пароль');
    window.location.href = 'indexhome.html';
  } else {
    console.log('Неправильный логин или пароль');
    error.style.display = 'block';
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('open');
});
// Массив с вашими сообщениями
const messages = [
  "Сообщение 1: Добро пожаловать на наш сайт!",
  "Сообщение 2: У нас новые акции и предложения!",
  "Сообщение 3: Подписывайтесь на нашу рассылку!",
  "Сообщение 4: Следите за обновлениями!",
];

// Функция для обновления бегущей строки
function updateTicker() {
  const ticker = document.getElementById("news-ticker");
  let index = 0;

  // Функция для отображения сообщений
  function displayMessage() {
    ticker.textContent = messages[index];
    index = (index + 1) % messages.length; // Циклически переключаемся по массиву
  }

  // Вызываем displayMessage каждые 5 секунд
  displayMessage(); // Показать первое сообщение сразу
  setInterval(displayMessage, 5000); // Каждые 5000 миллисекунд (5 секунд)
}

// Запускаем функцию обновления бегущей строки после загрузки страницы
window.onload = updateTicker;
