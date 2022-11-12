let side_links = document.getElementsByClassName("side-menu__link");
let pages = document.getElementsByName("page");
side_links[2].onclick = function (){
    for (let i = 0; i < document.getElementsByName("page").length; i++)
    {
        if(pages[i].style.height != "0")
        {
            pages[i].style.height = "0";
        }
    }
    document.getElementsByClassName("about-us")[0].style.height = "100%";
    sidebar.style.width = "0";
    sidebar.style.opacity = 0;
    document.body.style.overflow = "visible";
    event.preventDefault();
}