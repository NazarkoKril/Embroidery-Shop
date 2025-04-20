document.addEventListener('DOMContentLoaded', () => {
    // burger 
    
        const burgerIcon = document.querySelector('.burger-icon');
        const burgerMenu = document.querySelector('.burger-menu');
    
        if (burgerIcon && burgerMenu) {
            burgerIcon.addEventListener('click', () => {
                burgerIcon.classList.toggle('active');
                burgerMenu.classList.toggle('active');
            });
    
            document.addEventListener('click', (event) => {
                if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                    burgerIcon.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }
            });
        }
    
    });

    document.addEventListener("DOMContentLoaded", function () {
        new Swiper("#swiper", {
            slidesPerView: "auto", 
            spaceBetween: 10, 
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });

document.addEventListener('DOMContentLoaded', () => {
       
        const dropdownBtn = document.querySelector('#dropdown-btn');
        const dropdown = document.querySelector('.header-dropdown');
      
        if (dropdownBtn && dropdown) {
            dropdownBtn.addEventListener('click', () => {
                dropdownBtn.classList.toggle('open');
                dropdown.classList.toggle('open');
            });
        
            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
                    dropdownBtn.classList.remove('open');
                    dropdown.classList.remove('open');
                }
            });
        }
     
});