document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    console.log(el.children[2].innerText = 'Javascript');

    //dark mode
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    // Ajoutez un gestionnaire d'événements pour basculer le mode sombre

    let x = 0;

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (x == 0) {
            x = 1;
            document.querySelector("span").innerHTML = "&#x1F31E;";
            console.log(!x);
        } else {
            x = 0;
            document.querySelector("span").innerHTML = "&#x1F31D;";
            console.log(x);
        }
    });

    // Page change

    //Variables
    const EnterButton = document.getElementById('Enter');
    const BienvenuePage = document.querySelector(".bienvenue-page");
    const AccueilPage = document.querySelectorAll(".accueil-page");
    const AccueilButton = document.getElementById('li-accueil');

    // Passer sur la page d'accueil
    EnterButton.addEventListener('click', () => {

        BienvenuePage.style.display = "none";

        AccueilPage.forEach(function (page) {
            page.style.display = "block";
        });
    });

    //Passer sur la page d'accueil
    AccueilButton.addEventListener('click', () => {
        console.log('coucou');

        AccueilPage.forEach(function (page) {
            page.style.display = "none";
        });

        BienvenuePage.style.display = "block";
    });
});