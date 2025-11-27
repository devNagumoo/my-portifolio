
    const nav = document.getElementById('nav');
    const btn = document.getElementById('btn-menu');

    btn.addEventListener('click', () => {
        if (nav.classList.contains('max-h-0')) {
            nav.classList.remove('max-h-0');
            nav.classList.add('max-h-96');
        } else {
            nav.classList.add('max-h-0');
            nav.classList.remove('max-h-96');
        }
    });