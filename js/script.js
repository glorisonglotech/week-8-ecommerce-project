const menu = document.getElementById('menu');
const nav_mobile = document.getElementById('nav-mobile');

nav_mobile.style.right = '-250px';
menu.addEventListener('click',()=>{
    if(nav_mobile.style.right === '-250px'){
        nav_mobile.style.right = '0';
    }else{
        nav_mobile.style.right = '-250px';
    }
})


const showIt = document.getElementById('show');
showIt.style.opacity = "";