// Aguarda o DOM carregar para não dar erro de elemento inexistente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Animação de entrada (Scroll Reveal)
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .hero h1, .hero p, .services h2').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });

    // 2. Header Inteligente
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = "5px 5%";
            header.style.background = "rgba(10, 10, 10, 0.95)";
        } else {
            header.style.padding = "20px 5%"; // Ajuste conforme seu CSS original
            header.style.background = "rgba(10, 10, 10, 0.98)";
        }
    });

    // 3. Efeito de Brilho nos Cards (Hover Premium)
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.1) 0%, #000 80%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = `#000`;
        });
    });
});