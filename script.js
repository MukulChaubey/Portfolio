const bar = document.querySelector('.bar');
const line = document.querySelector('.line');
const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
const image = document.querySelector('.image');

bar.addEventListener('click', myfun);
// console.log(bar.children);
let status = true;
function myfun() {
  if (status) {
    bar.classList.add('show');
    menu.classList.add('show');
    list.classList.add('show');
    image.classList.add('shows');
    status = false;
  } else {
    bar.classList.remove('show');
    menu.classList.remove('show');
    list.classList.remove('show');
    image.classList.remove('shows');
    status = true;
  }
}
