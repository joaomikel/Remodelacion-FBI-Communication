// =========================================
// 1. DATOS DEL EQUIPO Y COLABORADORES
// =========================================

const teamMembers = [
    { 
        name: "Antonio Marino", 
        role: "Ceo & Founder", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-7.jpg", 
        description: "Intraprendente e determinato, si laurea in Economia Aziendale e Management. Fonda FBI communication affiancandosi dal miglior team esistente sul territorio.",
        linkedin: "#"
    },
    { 
        name: "Gaia Cardamone", 
        role: "Content Creator", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-1.jpg", 
        description: "Master in montaggio video alla New York Film Academy. Ha lavorato in California per ESPN, NBA, McLaren, Facebook.",
        linkedin: "#"
    },
    { 
        name: "Mario Tassone", 
        role: "Copywriter", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-18.jpg", 
        description: "Specializzato nella scrittura creativa, collabora dal 2012 con testate giornalistiche. Usa le parole per farti raggiungere i tuoi obiettivi.",
        linkedin: "#"
    },
    { 
        name: "Gianluca Procopio", 
        role: "Graphic Designer", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-2.jpg", 
        description: "Graphic designer, illustratore, e art director. Lavora da diversi anni nella gestione di progetti di design creando visual d'impatto.",
        linkedin: "#"
    },
    { 
        name: "Gianmarco Signoretti", 
        role: "Social Media Manager", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-3.jpg", 
        description: "Guida le piccole e medie imprese a sviluppare una forte presenza online attraverso strategie social e content marketing.",
        linkedin: "#"
    },
    { 
        name: "Marco Clodomiro", 
        role: "Photographer & FilmMaker", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-4.jpg", 
        description: "Filmmaker e Fotografo da oltre 10 anni, studia continuamente nuove tecniche per offrire servizi visivi sempre più completi ed innovativi.",
        linkedin: "#"
    }
];

// =========================================
// DATOS DE LOS COLABORADORES
// =========================================
const collaborators = [
    { 
        name: "Alessandro Campaiola", 
        role: "Doppiatore", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/01/DSC_2228.jpg", 
        description: "Alessandro Campaiola, noto anche con lo pseudonimo di Alessandro Ward, è un doppiatore italiano...",
        linkedin: "https://www.instagram.com/aleward92/?hl=it",
        pageLink: "alessandro-campaiola.html" // <-- ENLACE A SU PORTAFOLIO
    },
    { 
        name: "Angelo Maggi", 
        role: "Doppiatore", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2021/01/angelomaggi.png", 
        description: "Angelo Maggi è un attore, doppiatore, direttore del doppiaggio. Per i tuoi video aziendali potresti avere una delle voci italiane più famose...",
        linkedin: "https://www.instagram.com/angelomaggiofficial/?hl=it",
        pageLink: "angelo-maggi.html" // <-- ENLACE A SU PORTAFOLIO
    },
    { 
        name: "Eleonora Reti", 
        role: "Doppiatore", 
        image: "https://www.fbicommunication.it/wp-content/uploads/2022/10/eleonorareti1.png", 
        description: "Figlia del doppiatore Maurizio Reti, ha doppiato l'attrice argentina Florencia Bertotti, è stata la voce italiana di Kaley Cuoco...",
        linkedin: "#",
        pageLink: "eleonora-reti.html" // <-- ENLACE A SU PORTAFOLIO
    }
];

// =========================================
// LÓGICA DE RENDERIZADO DE TARJETAS
// =========================================
document.addEventListener('DOMContentLoaded', () => {

    function renderCards(containerId, dataArray) {
        const grid = document.getElementById(containerId);
        
        if (grid) {
            grid.innerHTML = ''; 
            
            dataArray.forEach(person => {
                const card = document.createElement('div');
                card.className = 'team-overlay-card'; 
                
                // Creamos el botón dinámicamente si el colaborador tiene la propiedad "pageLink"
                let buttonHTML = '';
                if (person.pageLink) {
                    buttonHTML = `<a href="${person.pageLink}" class="btn-primary" style="display: inline-block; padding: 6px 15px; font-size: 0.85rem; margin-top: 15px;">Scopri di più</a>`;
                }

                card.innerHTML = `
                    <img src="${person.image}" alt="${person.name}" class="team-full-img">
                    <div class="team-overlay-content">
                        <h4>${person.name}</h4>
                        <span class="role">${person.role}</span>
                        
                        <div class="team-overlay-desc">
                            <div class="desc-inner">
                                <p>${person.description}</p>
                                <div class="social-icon">
                                    <a href="${person.linkedin || '#'}"><i class="fa-brands fa-instagram"></i></a>
                                </div>
                                ${buttonHTML} </div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    }

    // Inyectamos el equipo en su contenedor
    if (typeof teamMembers !== 'undefined') renderCards('team-grid', teamMembers);
    
    // Inyectamos los colaboradores
    renderCards('collaborators-grid', collaborators);

    // --- B. Lógica del botón "Scopri di più" (Historia) ---
    const toggleBtn = document.getElementById('toggle-btn');
    const expandableContent = document.getElementById('expandable-content');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');

    if (toggleBtn && expandableContent) {
        toggleBtn.addEventListener('click', () => {
            expandableContent.classList.toggle('mostra');
            
            if (expandableContent.classList.contains('mostra')) {
                btnText.textContent = "MOSTRA MENO";
                btnIcon.classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                btnText.textContent = "SCOPRI DI PIÙ";
                btnIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    }

    // --- C. Lógica del Menú Móvil (Hamburguesa) ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (hamburger && navLinks) {
        // Abrir/Cerrar al hacer clic en la hamburguesa
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            
            // Opcional: Actualizar accesibilidad (aria-expanded)
            let expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !expanded);
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});