const clock = document.querySelector('.clock');
const dateDiv = document.querySelector('.date');

const tick = () => {
    const now = new Date();

    const h = now.getHours(); //get the number of hours
    const m = now.getMinutes(); //get the minutes
    const s = now.getSeconds(); //get the seconds
    // console.log(h, m, s);

    const d = now.getDate();
    const mon = now.getMonth() + 1;
    const y = now.getFullYear().toString().slice(-2);

    //for clock
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    //for date
    const htmlDate = `
        <span>${d}</span>/
        <span>${mon}</span>/
        <span>${y}</span>.
    `
    

    clock.innerHTML = html;
    dateDiv.innerHTML = htmlDate;


};

setInterval(tick, 1000);
