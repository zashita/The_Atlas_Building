side_links[0].onclick = function (){

    for (let i = 0; i < pages.length; i++)
    {
        if(pages[i].style.height != "0")
        {
            pages[i].style.height = "0";
        }
    }
    document.querySelector("main").style.height = "100%";
    sidebar.style.width = "0";
    sidebar.style.opacity = 0;
    document.body.style.overflow = "visible";
    event.preventDefault();
}