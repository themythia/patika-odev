let name;
const container = document.getElementById('container');
const welcomeText = document.getElementById('welcome-text');
const date = document.getElementById('date');

do {
  name = prompt('Lutfen adinizi giriniz');
} while (name == null || name == '');

if (name.length > 0) {
  container.classList.toggle('hidden');
  welcomeText.innerHTML = `Merhaba, ${name}! Hos geldin!`;
  window.setInterval(() => {
    const dateObj = new Date(Date.now());
    const dateString = dateObj.toLocaleString('tr-TR');
    const time = dateString.slice(11);
    const day = dateObj.toLocaleString('tr-TR', { weekday: 'long' });
    date.innerHTML = `${time} ${day}`;
  }, 1000);
}
