document.addEventListener("DOMContentLoaded", function () {
    const inputBlocks = document.querySelectorAll('.input');

    let usingKeyboard = false;

    // Визначення типу фокусу
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            usingKeyboard = true;
        }
    });

    window.addEventListener('mousedown', () => {
        usingKeyboard = false;
    });

    inputBlocks.forEach(block => {
        const input = block.querySelector('input, textarea');
        const clearBtn = block.querySelector('.input-clear');

        if (!input || !clearBtn) return;

        // Показати/сховати кнопку очищення
        input.addEventListener('input', () => {
            clearBtn.style.display = input.value ? 'block' : 'none';
        });

        // Клік на кнопку очищення
        clearBtn.addEventListener('click', () => {
            input.value = '';
            input.focus();
            clearBtn.style.display = 'none';
        });

        // Клас для клавіатурного фокусу
        input.addEventListener('focus', () => {
            if (usingKeyboard) {
                input.classList.add('keyboard-focus');
            }
        });

        input.addEventListener('blur', () => {
            input.classList.remove('keyboard-focus');
        });
    });
});
