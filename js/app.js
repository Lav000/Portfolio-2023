document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    console.log(el.children[2].innerText = 'Javascript');
});

//dark mode
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

// Ajoutez un gestionnaire d'événements pour basculer le mode sombre
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener("DOMContentLoaded", e => {
    var switchdarkmode = document.getElementById('toggle-dark-mode');
});