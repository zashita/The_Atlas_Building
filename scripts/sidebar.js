document.getElementsByClassName("header__side-menu-button-pic")[0].onclick = function () {
    document.getElementsByClassName("side-menu")[0].style.width = "100%";
    setTimeout(()=> document.body.style.overflow = "hidden", 750);
}
document.getElementsByClassName("side-menu__close")[0].onclick = function (){
    document.getElementsByClassName("side-menu")[0].style.width = "0";
    document.body.style.overflow = "visible";
}

