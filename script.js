const button = document.querySelector('.button');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date')

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


button.addEventListener('click',(e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        html.classList.remove('light');
        e.target.innerHTML = 'Light mode';
    }
})

function setTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const month = time.getMonth();
    const day = time.getDay();
    const year = time.getFullYear();
    const seconds = time.getSeconds();
    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    dateEl.innerHTML = `${days[day]}, ${day-1}. ${months[month]} ${year}.`
}



setTime();
setInterval(setTime, 1000);