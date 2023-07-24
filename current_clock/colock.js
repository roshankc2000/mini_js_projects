setInterval(() => {
    let time = new Date();

    hr.innerHTML = time.getHours();
    min.innerHTML = time.getMinutes();
    sec.innerHTML = time.getSeconds();

    // let h = time.getHours();
    // let m = time.getMinutes();
    // let s = time.getSeconds();
    // hr.innerHTML = h;
    // min.innerHTML = m;
    // sec.innerHTML = s;

}, 1000);