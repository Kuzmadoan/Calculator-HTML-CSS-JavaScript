let disply = document.getElementById('screen');

const wipe = () => {
    disply.value = '';
}

const show = (n) => {
    disply.value += n;
}
const calc = () => {
    disply.value = eval(disply.value);
    disply.value = Math.round(disply.value * 100)/100;
}