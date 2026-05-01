document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. BARRA DE CARREGAMENTO NO TOPO (PRO) ---
    const scrollBar = document.createElement('div');
    scrollBar.style.cssText = `
        position: fixed; top: 0; left: 0; height: 3px;
        background: #d4af37; z-index: 9999; transition: width 0.2s;
    `;
    document.body.appendChild(scrollBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + "%";
    });

    // --- 2. REVELAÇÃO EM CASCATA (STAGGERED) ---
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Adiciona um delay pequeno baseado na posição para efeito cascata
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100); 
            }
        });
    }, observerOptions);

    // Selecionamos os elementos e aplicamos o estado inicial
    const targets = document.querySelectorAll('.card, .hero h1, .hero p, .services h2');
    targets.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)"; // Transição mais "elástica"
        observer.observe(el);
    });

    // --- 3. EFEITO HOVER MELHORADO ---
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top } = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - left}px`);
            card.style.setProperty('--y', `${e.clientY - top}px`);
            card.style.background = `radial-gradient(600px circle at var(--x) var(--y), rgba(212, 175, 55, 0.15), transparent 40%), #000`;
        });
    });

   // --- 4. HEADER INTELIGENTE (SEM TREMEDEIRA) ---
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    // Adiciona a classe 'shrunk' se rolar mais de 50px
    if (window.scrollY > 50) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});
});
