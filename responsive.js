burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
home = document.querySelector('.home')
home1 = document.querySelector('.home1')
home2 = document.querySelector('.home2')
 


burger.addEventListener('click', ()=>{
    home.classList.toggle('v-nav-resp');
    home1.classList.toggle('v-nav-resp');
    home2.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
    
})