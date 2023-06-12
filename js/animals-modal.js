
// Lions

document.getElementById("lion-btn").addEventListener("click", function() {
    document.getElementById("modal-lions").classList.add("open")
})

document.querySelector("#modal-lions .modal-win-lions").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("modal-lions").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Camels

document.getElementById("camel-btn").addEventListener("click", function() {
    document.getElementById("modal-camels").classList.add("open")
})

document.querySelector("#modal-camels .modal-win-camels").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("modal-camels").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Male & Female photo swipe

var m = document.getElementById('male-photo');
var f = document.getElementById('fem-photo');

var startingX;

function mhanleTouchStart(evt) {
    startingX = evt.touches[0].clientX;
};

function mhandleTouchMove(evt) {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;

    if (change < 0) {
        return;
    }

    m.style.left = '-' + change + 'px';
    f.style.display = 'block';
    f.style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function mhandleTouchEnd(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        m.style.left = 0;
        f.style.left = '100%';
        f.style.display = 'none';
    } else {
        m.style.transition = 'all .3s';
        f.style.transition = 'all .3s';
        m.style.left = '-100%';

        f.style.left = '0';
        f.style.display = 'block';
    }
};



function fhanleTouchStart(evt) {
    startingX = evt.touches[0].clientX;
    m.style.transition = '';
    f.style.transition = '';
    m.style.display = 'none';
};

function fhandleTouchMove(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;

    if (change < 0) {
        return;
    }

    m.style.left = 'block';
    f.style.display = (change - screen.width) + 'px';
    f.style.left = change + 'px';
    evt.preventDefault();
};

function fhandleTouchEnd(evt) {
    var change = evt.changedTouches[0].clientX -startingX;
    var half = screen.width / 4;
    if (change < half) {
        m.style.left = '-100%';
        m.style.left = 'none';
        f.style.display = '0';
    } else {
        m.style.transition = 'all .3s';
        f.style.transition = 'all .3s';
        m.style.left = '0';
        f.style.left = '100%';
    }
};

