// Ejemplo de validación básica del formulario de contacto

console.log("¡script.js cargado exitosamente!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      if (!validarCorreo(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
      }

      // Aquí podrías enviar el formulario por AJAX o simplemente:
      alert("¡Formulario enviado correctamente! Gracias por contactarnos.");
      form.reset();
    });
  }
});

function validarCorreo(email) {
  // Expresión regular básica para validar correo
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
