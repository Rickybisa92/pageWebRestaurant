const form = document.getElementById('form');
const btn = document.getElementById('button');
const responseMessage = document.createElement('p'); // Crear mensaje dinámico

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que la página se recargue

  btn.value = 'Enviando...';
  const serviceID = 'default_service';
  const templateID = 'template_l3y5hks';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Reservar';
      responseMessage.textContent = '¡Reserva enviada con éxito!';
      responseMessage.style.color = 'green';
      form.appendChild(responseMessage); // Añade el mensaje al formulario
      form.reset();
    }, (err) => {
      btn.value = 'Reservar';
      responseMessage.textContent = 'Hubo un error. Inténtalo nuevamente.';
      responseMessage.style.color = 'red';
      console.error('Error:', err);
      form.appendChild(responseMessage);
    });
});

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  
  form.addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
  
    if (!isValidEmail(email)) {
      event.preventDefault();
      responseMessage.textContent = 'Por favor, ingresa un correo válido.';
      responseMessage.style.color = 'red';
      form.appendChild(responseMessage);
      return;
    }
  
    // Si pasa las validaciones, continúa con el envío
  });
  