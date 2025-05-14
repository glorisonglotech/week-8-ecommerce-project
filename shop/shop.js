const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menuClose = document.getElementById('menu-close');



navbar.style.left = '-350px';
menu.addEventListener('click',()=>{
    if(navbar.style.left === '-350px'){
        navbar.style.left = '0';
    }else{
        navbar.style.left = '-350px';
    }
})