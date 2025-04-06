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