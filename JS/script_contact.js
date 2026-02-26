document.addEventListener('DOMContentLoaded', () => {

    // 1. LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) - Igual que en el resto de la web
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            let expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
        });

        navItems.forEach(item => {
            item.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. LÓGICA DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Evita que la página se recargue al darle al botón
            event.preventDefault(); 

            // Aquí normalmente iría tu código para enviar datos al servidor (fetch/AJAX)
            // Como esto es frontend, simulamos el envío exitoso:

            // Mostrar el mensaje de éxito
            successMessage.style.display = 'block';

            // Limpiar los campos del formulario
            contactForm.reset();

            // Ocultar el mensaje de éxito después de 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
});