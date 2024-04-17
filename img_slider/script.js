let scrollContainer = document.querySelector('.slider');
let rightBtn = document.querySelector('.right-btn');
let leftBtn = document.querySelector('.left-btn');

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    
})
 rightBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -=900;
 })

 leftBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft +=900;
 })