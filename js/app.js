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
            page.style.opacity = "0";
            // Set display to block after a delay to make sure the transition has time to start
            setTimeout(() => {
            // Set opacity on
                page.style.opacity = "1";
        
                // Set transition property
                page.style.transition = "opacity 0.5s";
            }, 100);
        });
    });

    //Passer sur la page d'bienvenue
    AccueilButton.addEventListener('click', () => {
        
        AccueilPage.forEach(function (page) {
            page.style.opacity = "0";
            // Set display to block after a delay to make sure the transition has time to start
            setTimeout(() => {
                page.style.display = "none";
                BienvenuePage.style.display = "block";
                // Set opacity on
            }, 500);

            setTimeout(() => {
                // Set opacity on
                page.style.opacity = "1";

                // Set transition property
                page.style.transition = "opacity 0.5s";
            }, 600);
        });
    })
});