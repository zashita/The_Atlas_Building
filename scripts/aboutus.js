
document.getElementsByClassName("side-menu__link")[2].onclick = function (){
    for (let i = 0; i < document.getElementsByName("page").length; i++)
    {
        if(document.getElementsByName("page")[i].style.height != "0")
        {
            document.getElementsByName("page")[i].style.height = "0";
        }
    }
    document.getElementsByClassName("about-us")[0].style.height = "100%";
    document.getElementsByClassName("side-menu")[0].style.width = "0";
    document.getElementsByClassName("side-menu")[0].style.opacity = 0;
    document.body.style.overflow = "visible";
    event.preventDefault();
}