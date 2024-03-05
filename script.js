let search= document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar= document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=> {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

window.onscroll = ()=> {
    navbar.classList.remove('active');
    search.classList.remove('active'); 
}

//adding reload page on logo
const logo= document.getElementById("mylogo");
 //add an event listner on logo
 logo.addEventListener("click",function(){
    location.reload();
 })


let header= document.querySelector('header');
window.addEventListener('scroll', ()=> {
    header.classList.toggle('shadow',window.scrollY >0);
});