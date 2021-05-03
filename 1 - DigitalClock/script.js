function askName() {
    var name = prompt("Adınız nedir?");
    let namee = document.getElementById("myName")
    namee.innerText = `Welcome to my digital clock app ${name}!`
    namee.classList.add("#myName")
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();

    if (session == 1) {
        session = "Pazartesi";
    } else if (session == 2) {
        session = "Salı";
    } else if (session == 3) {
        session = "Çarşamba";
    } else if (session == 4) {
        session = "Perşembe";
    } else if (session == 5) {
        session = "Cuma";
    } else if (session == 6) {
        session = "Cumartesi";
    } else if (session == 7) {
        session = "Pazar";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
askName()
