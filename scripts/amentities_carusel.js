function ament_carusel() {
let amentities = document.getElementById("amentites");

    let width = 440;
    let count = 2;

    let list = amentities.querySelector('ul');
    let listElems = amentities.querySelectorAll('li');

    let position = 0;

    amentities.querySelector('.arrow-left').onclick = function () {
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };

    amentities.querySelector('.arrow-right').onclick = function () {
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
}
ament_carusel();