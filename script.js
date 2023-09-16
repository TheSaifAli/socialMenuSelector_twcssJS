const menuEl = document.querySelector('#menu');
const menuTextEl = menuEl.querySelector('p');
const socialListEL = document.querySelector('#socialList');
const downIcon = document.querySelector('.fa-chevron-down');
const listsEl = socialListEL.querySelectorAll('li');


menuEl.addEventListener('click',()=>{
    socialListEL.classList.toggle('hide')
    downIcon.classList.toggle('rotate');
})
listsEl.forEach((list)=>{
    list.addEventListener('click',()=>{
        menuTextEl.innerHTML = list.innerHTML
        socialListEL.classList.add('hide');
        downIcon.classList.toggle('rotate')
    })
})
