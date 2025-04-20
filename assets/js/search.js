document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');

    // --- Показати/сховати кнопку очищення ---
    search.addEventListener('input', () => {
        clearBtn.style.display = search.value ? 'block' : 'none';
    });

    clearBtn.addEventListener('click', () => {
        search.value = '';
        search.focus();
        clearBtn.style.display = 'none';
    });

    // --- Визначення типу фокусу: клавіатура чи мишка ---
    let usingKeyboard = false;

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            usingKeyboard = true;
        }
    });

    window.addEventListener('mousedown', () => {
        usingKeyboard = false;
    });

    search.addEventListener('focus', () => {
        if (usingKeyboard) {
            search.classList.add('keyboard-focus');
        }
    });

    search.addEventListener('blur', () => {
        search.classList.remove('keyboard-focus');
    });
});
