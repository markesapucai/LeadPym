//ADD for e diminuir rep
function clock() {
    return {
        start() {
            this.createDate();
        },
        createDate() {
            const targetDate = new Date('01-01-2024 00:00:00').getTime();
            setInterval(() => {
                this.upDate(targetDate)}
            , 1000)
        },
        upDate(targetDate) {
            const date = new Date().getTime();

            const betweenDate = targetDate - date;

            const days = Math.floor(betweenDate / (1000 * 60 * 60 * 24));
            const hours = Math.floor((betweenDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const min = Math.floor((betweenDate % (1000 * 60 * 60)) / (1000 * 60));
            const sec = Math.floor((betweenDate % (1000 * 60)) / 1000);

            this.createDiv(days, hours, min, sec);
            
        },
        createDiv(days, hours, min, sec) {
            const pDay = document.querySelector('.pDay');
            const pHour = document.querySelector('.pHour');
            const pMin = document.querySelector('.pMin');
            const pSec = document.querySelector('.pSec');
            
            if(days < 10) days = `0${days}`
            if(hours < 10) hours = `0${hours}`
            if(min < 10) min = `0${min}`
            if(sec < 10) sec = `0${sec}`
            

            pDay.textContent = days;
            pHour.textContent = hours;
            pMin.textContent = min;
            pSec.textContent = sec;

            pDay.style.fontSize = "26pt";
            pHour.style.fontSize = "26pt";
            pMin.style.fontSize = "26pt";
            pSec.style.fontSize = "26pt";
        }
    }
}
//parada da formatação do input - REvisar - 
function inputFormat() { // Assuming 'celInp' is the ID of your input element.

    celInp.addEventListener('input', () => {
        let celInpValue = celInp.value.replace(/\D/g, ''); // Remove non-digit characters
        if (celInpValue.length >= 2 && celInpValue.length <= 11) {
            let formattedValue = `(${celInpValue.substring(0, 2)})`;

            if (celInpValue.length > 2) {
                formattedValue += ` ${celInpValue.substring(2, 7)}`;
            }
            if (celInpValue.length > 7) {
                formattedValue += `-${celInpValue.substring(7, 11)}`;
            }
            celInp.value = formattedValue;
        }
    });
}

const celInp = document.querySelector('.celular');
celInp.addEventListener('input', inputFormat);



//ADD infos a vetor
const register = () => {
    const celInpValue = document.querySelector('.celular').value;
    const emailInpValue = document.querySelector('.email').value;

    console.log(celInpValue, emailInpValue)
}

const showClock = clock();
showClock.start();

