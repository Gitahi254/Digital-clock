const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours(); //get the number of hours
    const m = now.getMinutes(); //get the minutes
    const s = now.getSeconds(); //get the seconds
    // console.log(h, m, s);

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;


};

setInterval(tick, 1000);