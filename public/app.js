const menuBurger = document.getElementById('menu-burger');
const menu = document.getElementById('menu');

menuBurger.addEventListener("click", () => {
    console.log('pressed da button');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
        menu.classList.add('block')
    } else {
        menu.classList.remove('block')
        menu.classList.add('hidden')
    }
});