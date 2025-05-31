document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema salvo ou o tema preferido do sistema
    if (currentTheme) {
        document.body.classList.toggle('dark-theme', currentTheme === 'dark');
        themeToggle.checked = (currentTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver tema salvo, mas o usuário prefere o modo escuro no sistema
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        localStorage.setItem('theme', 'dark'); // Salva a preferência inicial
    }


    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

// controla o volume da musica
const musiquinha = document.getElementById('musiquinha');
musiquinha.volume = 0.05; 

    // Animação suave de scroll para âncoras (opcional, se você adicionar links no header para seções)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Verifica se o link é para uma seção da página e não um link de download
            if (this.getAttribute('href') !== '#' && !this.hasAttribute('download')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});