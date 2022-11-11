document.getElementsByClassName("side-menu__link")[0].onclick = function (){
    document.getElementsByClassName("about-us")[0].style.height = "0";
    document.querySelector("main").style.height = "100%";
    document.getElementsByClassName("side-menu")[0].style.width = "0";
    document.getElementsByClassName("side-menu")[0].style.opacity = 0;
    document.body.style.overflow = "visible";
    event.preventDefault();
}