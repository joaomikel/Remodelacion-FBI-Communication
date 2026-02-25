document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // Efecto sutil en el Navbar al hacer scroll (típico en diseños limpios)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            header.style.padding = '15px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '20px 0';
        }
    });

    // Desactivar comportamiento por defecto de enlaces vacíos
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
});