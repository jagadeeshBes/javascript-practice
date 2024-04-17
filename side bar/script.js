document.addEventListener('DOMContentLoaded',()=>{
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sideBar = document.querySelector('.side-bar')
    
    openBtn.addEventListener('click',()=>{
        sideBar.style.left = '0';
    });

    closeBtn.addEventListener('click',()=>{
        sideBar.style.left = '-300px';
    });
});