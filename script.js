document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.controls button');
    const cocktails = document.querySelectorAll('.cocktail');
    const searchInput = document.getElementById('search');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.modal .close');

    // Фильтрация по категориям
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            cocktails.forEach(cocktail => {
                if (filter === 'all' || cocktail.dataset.category === filter) {
                    cocktail.classList.remove('hidden');
                } else {
                    cocktail.classList.add('hidden');
                }
            });
        });
    });

    // Поиск по названию
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        cocktails.forEach(cocktail => {
            const title = cocktail.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                cocktail.classList.remove('hidden');
            } else {
                cocktail.classList.add('hidden');
            }
        });
    });

    // Модальное окно
    cocktails.forEach(cocktail => {
        cocktail.addEventListener('click', () => {
            const title = cocktail.querySelector('h2').textContent;
            const description = cocktail.querySelector('p').textContent;

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            modal.classList.add('show');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});