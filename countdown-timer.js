const end = new Date('02/28/2019 2:30 PM'); // 16:30 in Finland

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;
let timer = '';

function spanFormat(time, text) {
    return '<span class="count">' + time + '</span>' + ' ' + '<span class="txt">' + text + '</span>';
}

function showRemaining() {
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'WEDDING IS HERE!';

        return;
    }
    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = spanFormat(days, 'days ');
    document.getElementById('countdown').innerHTML += spanFormat(hours, 'hrs ');
    document.getElementById('countdown').innerHTML += spanFormat(minutes, 'mins ');
    document.getElementById('countdown').innerHTML += spanFormat(seconds, 'secs');
}

timer = setInterval(showRemaining, 1000);
