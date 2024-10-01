'use strict';

let menuElems = document.querySelectorAll('.menu__elem');

menuElems.forEach(menuElem => {
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    menuElem.addEventListener('mouseenter', function(){
        submenu.classList.add('active')
        btn.classList.add('active')
    })

    menuElem.addEventListener('mouseleave', function(){
        submenu.classList.remove('active')
        btn.classList.remove('active')
    })
})

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq__item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');
    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = '';
    }
})

let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})


let toTopBtn = document.querySelector(".number");
let footer = document.querySelector(".FAQ");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toTopBtn.classList.add("show");
      } else {
        toTopBtn.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(footer);




function modal_active(){
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.modal_bg').classList.add('active');
}
setTimeout(modal_active, 3000);
cancle.onclick = function(){
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.modal_bg').classList.remove('active');
    
}


let currentIndex = 0; 
const slides = document.querySelectorAll(".slide"); 
const dots = document.querySelectorAll(".dot"); 
 
function showSlide(index) { 
    if (index >= slides.length) { 
        currentIndex = 0; 
    } else if (index < 0) { 
        currentIndex = slides.length - 1; 
    } else { 
        currentIndex = index; 
    } 
 
    slides.forEach((slide, i) => { 
        slide.style.display = "none"; 
        dots[i].classList.remove("active"); 
    }); 
 
    slides[currentIndex].style.display = "block"; 
    dots[currentIndex].classList.add("active"); 
} 
 
 
function moveSlide(step) { 
    showSlide(currentIndex + step); 
} 
 
function currentSlide(index) { 
    showSlide(index); 
} 
 
function initSlider() { 
    showSlide(currentIndex); 
} 
 
dots.forEach((dot, index) => { 
    dot.addEventListener("click", () => currentSlide(index)); 
}); 
 
document.addEventListener("DOMContentLoaded", initSlider);