document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("follow-modal").classList.add("open")
})


document.querySelector("#follow-modal .modal_widow").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("follow-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Я ЕБАЛ ЭТОТ JS