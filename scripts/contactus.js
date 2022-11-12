side_links[3].onclick = function (){

    for (let i = 0; i < pages.length; i++)
    {
        if(pages[i].style.height != "0")
        {
            pages[i].style.height = "0";
        }
    }
    document.getElementsByClassName("contact-us")[0].style.height = "100%";
    sidebar.style.width = "0";
    sidebar.style.opacity = 0;
    document.body.style.overflow = "visible";
    event.preventDefault();
}