

let sidebar = document.getElementsByClassName("side-menu");
document.getElementsByClassName("header__side-menu-button-pic")[0].onclick = function () {
    document.getElementsByClassName("side-menu")[0].style.width = "100%";
}
document.getElementsByClassName("side-menu__close")[0].onclick = function (){
    document.getElementsByClassName("side-menu")[0].style.width = "0";

}

