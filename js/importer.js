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
})
.catch(error => console.error(error));
