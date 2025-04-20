document.addEventListener('DOMContentLoaded', () => {
        
    const filterBtn = document.querySelector('.filter-btn');
    const filter = document.querySelector('.blogs-tabs');

    if (filterBtn && filter) {
        filterBtn.addEventListener('click', () => {
            filterBtn.classList.toggle('open');
            filter.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
            if (!filter.contains(event.target) && !filterBtn.contains(event.target)) {
                filterBtn.classList.remove('open');
                filter.classList.remove('open');
            }
        });
    }
});