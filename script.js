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
