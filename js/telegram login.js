// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
  console.log(`Привет, ${user.first_name}! Твой ID: ${user.id}`);
  // Можно вывести имя пользователя на экран
}