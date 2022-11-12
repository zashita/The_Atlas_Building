
let sidebar = document.getElementsByClassName("side-menu")[0]


document.getElementsByClassName("header__side-menu-button-pic")[0].onclick = function () {
    sidebar.style.width = "100%";
    sidebar.style.opacity = 1;

    setTimeout(()=> document.body.style.overflow = "hidden", 1);
}
document.getElementsByClassName("side-menu__close")[0].onclick = function (){
    sidebar.style.width = "0";
    sidebar.style.opacity = 0;
    document.body.style.overflow = "visible";
}



