// Adiciona animação suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alerta de boas-vindas (opcional)
window.addEventListener('load', () => {
    console.log('Site TechScan carregado com sucesso!');
});