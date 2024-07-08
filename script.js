function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');

    setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        hoursElem.textContent = hours < 10 ? '0' + hours : hours;
        minutesElem.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElem.textContent = seconds < 10 ? '0' + seconds : seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = () => {
    const duration = 60 * 60 * 24; // 24 hours in seconds
    startCountdown(duration);
}
