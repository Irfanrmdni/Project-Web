var Typer = function (element) {
    this.element = element;
    var delim = element.dataset.delim || ",";
    var words = element.dataset.words || "override these,sample typing";
    this.words = words.split(delim).filter((v) => v); // non empty words
    this.delay = element.dataset.delay || 200;
    this.loop = element.dataset.loop || "true";
    if (this.loop === "false") { this.loop = 1 }
    this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;

    this.progress = { word: 0, char: 0, building: true, looped: 0 };
    this.typing = true;

    var colors = element.dataset.colors || "black";
    this.colors = colors.split(",");
    this.element.style.color = this.colors[0];
    this.colorIndex = 0;

    this.doTyping();
};

Typer.prototype.start = function () {
    if (!this.typing) {
        this.typing = true;
        this.doTyping();
    }
};
Typer.prototype.stop = function () {
    this.typing = false;
};
Typer.prototype.doTyping = function () {
    var e = this.element;
    var p = this.progress;
    var w = p.word;
    var c = p.char;
    var currentDisplay = [...this.words[w]].slice(0, c).join("");
    var atWordEnd;
    if (this.cursor) {
        this.cursor.element.style.opacity = "1";
        this.cursor.on = true;
        clearInterval(this.cursor.interval);
        this.cursor.interval = setInterval(() => this.cursor.updateBlinkState(), 400);
    }

    e.innerHTML = currentDisplay;

    if (p.building) {
        atWordEnd = p.char === this.words[w].length;
        if (atWordEnd) {
            p.building = false;
        } else {
            p.char += 1;
        }
    } else {
        if (p.char === 0) {
            p.building = true;
            p.word = (p.word + 1) % this.words.length;
            this.colorIndex = (this.colorIndex + 1) % this.colors.length;
            this.element.style.color = this.colors[this.colorIndex];
        } else {
            p.char -= 1;
        }
    }

    if (p.word === this.words.length - 1) {
        p.looped += 1;
    }

    if (!p.building && this.loop <= p.looped) {
        this.typing = false;
    }

    setTimeout(() => {
        if (this.typing) { this.doTyping() };
    }, atWordEnd ? this.deleteDelay : this.delay);
};

var Cursor = function (element) {
    this.element = element;
    this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
    element.innerHTML = this.cursorDisplay;
    this.on = true;
    element.style.transition = "all 0.1s";
    this.interval = setInterval(() => this.updateBlinkState(), 400);
}
Cursor.prototype.updateBlinkState = function () {
    if (this.on) {
        this.element.style.opacity = "0";
        this.on = false;
    } else {
        this.element.style.opacity = "1";
        this.on = true;
    }
}

function TyperSetup() {
    var typers = {};
    for (let e of document.getElementsByClassName("typer")) {
        typers[e.id] = new Typer(e);
    }
    for (let e of document.getElementsByClassName("typer-stop")) {
        let owner = typers[e.dataset.owner];
        e.onclick = () => owner.stop();
    }
    for (let e of document.getElementsByClassName("typer-start")) {
        let owner = typers[e.dataset.owner];
        e.onclick = () => owner.start();
    }
    for (let e of document.getElementsByClassName("cursor")) {
        let t = new Cursor(e);
        t.owner = typers[e.dataset.owner];
        t.owner.cursor = t;
    }
}

TyperSetup();



// timing event
const waktuTujuan = new Date('jan 19 2021 12:16:00');

const hitungMundur = setInterval(function () {
    const waktuSekarang = new Date().getTime();
    const selisih = waktuTujuan - waktuSekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));

    const getHari = document.querySelector('.hari');
    const getJam = document.querySelector('.jam');
    const getMenit = document.querySelector('.menit');
    const getDetik = document.querySelector('.detik');

    getHari.innerHTML = hari;
    getJam.innerHTML = jam;
    getMenit.innerHTML = menit;
    getDetik.innerHTML = detik;

    if (selisih < 0) {
        clearInterval(hitungMundur);
    }

}, 1000);

// Hide navbar on scroll
let lastScrollTop = 0;

const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        topbar.style.top = '-70px';
    } else {
        topbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

// slider
const slide = document.querySelectorAll('.slide');
const circle = document.querySelectorAll('.circle1');

let index = 0;

function slideshlow() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    index = index + 1;

    if (index > slide.length) {
        index = 1;
    }

    for (let j = 0; j < circle.length; j++) {
        circle[j].className = circle[j].className.replace(' active', '');
    }

    slide[index - 1].style.display = 'block';
    circle[index - 1].className += ' active';
    setTimeout(slideshlow, 2000);
}

slideshlow();