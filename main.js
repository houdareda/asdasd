let btnMenu = document.getElementById('btn-menu');
let navLink = document.querySelector('.nav-links');

btnMenu.onclick = () => {
    btnMenu.classList.toggle('fa-times') 
    navLink.classList.toggle('active')
}


window.onscroll = () =>{
    btnMenu.classList.remove('fa-times') 
    navLink.classList.remove('active')
}