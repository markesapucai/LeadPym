// Cria e formata data
// Cria elemento p

function exec() {
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
            
            pDay.textContent = days;
            pHour.textContent = hours;
            pMin.textContent = min;
            pSec.textContent = sec;
        }
    }
}

const exeec = exec();
exeec.start();