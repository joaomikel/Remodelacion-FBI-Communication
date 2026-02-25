// 1. Datos originales del equipo
const teamMembers = [
    { name: "Antonio Marino", role: "Ceo & Founder", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-7.jpg", description: "Intraprendente e determinato, si laurea in Economia Aziendale e Management. Fonda FBI communication affiancandosi dal miglior team esistente sul territorio." },
    { name: "Gaia Cardamone", role: "Content Creator", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-1.jpg", description: "Master in montaggio video alla New York Film Academy. Ha lavorato in California per ESPN, NBA, McLaren, Facebook." },
    { name: "Mario Tassone", role: "Copywriter", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-18.jpg", description: "Specializzato nella scrittura creativa, collabora dal 2012 con testate giornalistiche. Usa le parole per farti raggiungere i tuoi obiettivi." },
    { name: "Gianluca Procopio", role: "Graphic Designer", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-2.jpg", description: "Graphic designer, illustratore, e art director. Lavora da diversi anni nella gestione di progetti di design creando visual d'impatto." },
    { name: "Gianmarco Signoretti", role: "Social Media Manager", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-3.jpg", description: "Guida le piccole e medie imprese a sviluppare una forte presenza online attraverso strategie social e content marketing." },
    { name: "Marco Clodomiro", role: "Photographer & FilmMaker", image: "https://www.fbicommunication.it/wp-content/uploads/2021/04/unnamed-4.jpg", description: "Filmmaker e Fotografo da oltre 10 anni, studia continuamente nuove tecniche per offrire servizi visivi sempre più completi ed innovativi." }
];

// 2. Datos de los colaboradores (puedes añadir o editar los tuyos reales aquí)
const collaborators = [
    { name: "Laura Ferrari", role: "SEO Specialist", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400", description: "Ottimizza il tuo sito per i motori di ricerca garantendo massima visibilità e conversioni." },
    { name: "Simone Romano", role: "Web Developer", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400", description: "Sviluppa soluzioni web custom, veloci e sicure, trasformando il design in codice perfetto." },
    { name: "Chiara Russo", role: "PR & Eventi", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", description: "Cura le relazioni pubbliche e organizza eventi per far brillare il tuo brand offline." }
];
document.addEventListener('DOMContentLoaded', () => {

    // Función para renderizar tarjetas con fotos enteras y texto superpuesto
    function renderCards(containerId, dataArray) {
        const grid = document.getElementById(containerId);
        if (grid) {
            grid.innerHTML = ''; // Limpiamos por si acaso
            dataArray.forEach(person => {
                const card = document.createElement('div');
                card.className = 'team-overlay-card';
                card.innerHTML = `
                    <img src="${person.image}" alt="${person.name}" class="team-full-img">
                    <div class="team-overlay-content">
                        <h4>${person.name}</h4>
                        <span class="role">${person.role}</span>
                        
                        <div class="team-overlay-desc">
                            <div class="desc-inner">
                                <p>${person.description}</p>
                                <div class="social-icon">
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
    }

    // Inyectamos el equipo y los colaboradores
    renderCards('team-grid', teamMembers);
    renderCards('collaborators-grid', collaborators);

    // Lógica del botón "Scopri di Più" para la historia (se mantiene igual)
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
});