let menu  = document.querySelectorAll("#menu-icon");
let navbar = document.querySelectorAll(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-solid fa-xmark");
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove("fa-solid fa-xmark");
    navbar.classList.remove('active');
} 