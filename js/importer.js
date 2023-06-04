const menu = document.getElementById('menu');
const header = document.getElementById('header');

// Import of Menu and Header
fetch('menu.html')
.then(response => response.text())
.then(data => {
    menu.innerHTML = data;






})
.catch(error => console.error(error));

fetch('header.html')
.then(response => response.text())
.then(data => {
    header.innerHTML = data;

    const btnOpen = header.querySelector("#open-modal");
    const modal = header.querySelector("#follow-modal");

    btnOpen.addEventListener("click", () => {
        modal.classList.add("open");
    })


    modal.addEventListener('click', event => {
        if(event.target.classList.contains("modal")) {
            event.currentTarget.classList.remove('open');
        }
    });
})
