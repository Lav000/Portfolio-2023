document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el = document.querySelector("head");
    console.log(el.children[2].innerText = 'Javascript');
});