function apart_carusel() {
    let apartments = document.getElementById("apartments");
    let width = 1240;
    let count = 1;
    let left = document.getElementById("left");
    let right = document.getElementById("right")

    let list = apartments.querySelector('ul');
    let listElems = apartments.querySelectorAll('li');

    let position = 0;

    left.onclick = function () {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };

    right.onclick = function () {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
}
apart_carusel();