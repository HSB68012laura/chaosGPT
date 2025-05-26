// Selección de elementos
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Función para mostrar el slide actual
function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

// Evento: siguiente slide
if (nextBtn && items.length > 0) { // Solo añadir listeners si los elementos existen
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });
}

// Evento: slide anterior
if (prevBtn && items.length > 0) { // Solo añadir listeners si los elementos existen
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });
}

// Mostrar el primero al cargar
if (items.length > 0) {
    showItem(currentIndex);
}
// --- Código de Validación del Formulario de Contacto (NUEVO) ---

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    // Solo ejecuta el código de formulario si el formulario existe en la página actual
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const reasonSelect = document.getElementById('reason');
        const messageTextarea = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const reasonError = document.getElementById('reasonError');
        const messageError = document.getElementById('messageError');
        const successMessage = document.getElementById('successMessage');

        // Función para mostrar un mensaje de error
        function showError(element, message) {
            element.textContent = message;
            element.style.display = 'block';
        }

        // Función para ocultar un mensaje de error
        function hideError(element) {
            element.textContent = '';
            element.style.display = 'none';
        }

        // Función para validar el formato del email
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        contactForm.addEventListener('submit', (event) => {
            // Prevenir el envío por defecto del formulario HTML5
            event.preventDefault();

            // Ocultar todos los mensajes de error y éxito al inicio de cada intento de envío
            hideError(nameError);
            hideError(emailError);
            hideError(reasonError);
            hideError(messageError);
            successMessage.textContent = '';
            successMessage.style.display = 'none';

            let isValid = true; // Bandera para controlar si el formulario es válido

            // Validar campo Nombre
            if (nameInput.value.trim() === '') {
                showError(nameError, 'El nombre es obligatorio.');
                isValid = false;
            }

            // Validar campo Email
            if (emailInput.value.trim() === '') {
                showError(emailError, 'El correo electrónico es obligatorio.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailError, 'Por favor, introduce un correo electrónico válido.');
                isValid = false;
            }

            // Validar campo Motivo de contacto
            if (reasonSelect.value === '') {
                showError(reasonError, 'Por favor, selecciona un motivo de contacto.');
                isValid = false;
            }

            // Validar campo Mensaje
            if (messageTextarea.value.trim() === '') {
                showError(messageError, 'El mensaje es obligatorio.');
                isValid = false;
            }

            // Si todas las validaciones pasan
            if (isValid) {
                // Aquí es donde normalmente enviarías el formulario a un servidor.
                // Para este ejemplo, simplemente mostraremos un mensaje de éxito.
                console.log('Formulario enviado con éxito (simulado):', {
                    name: nameInput.value,
                    email: emailInput.value,
                    reason: reasonSelect.value,
                    message: messageTextarea.value
                });

                successMessage.textContent = '¡Gracias por contactarnos! Tu mensaje ha sido enviado.';
                successMessage.style.display = 'block';

                // Opcional: Resetear el formulario después del envío simulado
                contactForm.reset();
            }
        });

        // Opcional: Eliminar mensajes de error al escribir en los campos
        nameInput.addEventListener('input', () => hideError(nameError));
        emailInput.addEventListener('input', () => hideError(emailError));
        reasonSelect.addEventListener('change', () => hideError(reasonError));
        messageTextarea.addEventListener('input', () => hideError(messageError));
    }
});