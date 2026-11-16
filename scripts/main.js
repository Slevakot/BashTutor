window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTopBtn');
    if (window.scrollY > 300) {
        btn.classList.remove('d-none');
        btn.classList.add('d-flex'); // показываем и возвращаем flex-верстку
    } else {
        btn.classList.remove('d-flex');
        btn.classList.add('d-none'); // полностью скрываем через d-none
    }
});

document.getElementById('backToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});