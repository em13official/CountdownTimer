const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const FinalDay= " 09 May 2101 ";

function countdown() {
    const finalDate = new Date(FinalDay);
    const currentDate = new Date ();

    const Totalseconds = Math.floor((finalDate - currentDate) / 1000);

    const seconds = Math.floor(Totalseconds) % 60 ;

    const minutes = Math.floor(Totalseconds / 60) % 60;

    const hours = Math.floor(Totalseconds / 3600 + 1) % 24;

    const days = Math.floor(Totalseconds / 3600 / 24) % 7;

    const weeks = Math.floor(Totalseconds / 3600 / 24 / 7) ;

    weeksEl.innerHTML = weeks;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

// Initial Call

countdown ();

setInterval (countdown, 1000);
