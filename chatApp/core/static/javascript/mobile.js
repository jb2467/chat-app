/**
 Code so mobile users see a drop downn for buttons and the top isn't
 */
 const menuBtn = document.getElementById('menu')
 const navList = document.getElementById('navMenu')
 
 function toggleBtn(){
    
    navList.classList.toggle('show')
}
menuBtn.addEventListener('click',toggleBtn)
 