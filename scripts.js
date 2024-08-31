// Função para scroll suave
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Abrir e fechar modal de login
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Validação do formulário de cadastro
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar lógica para enviar os dados do formulário
});

// Carrossel simples
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
