// Aquí puedes agregar la lógica JavaScript que necesites.
// Ejemplo: Validación del formulario de contacto.

console.log("¡script.js cargado exitosamente!");

// Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      // Evitamos el envío para hacer validaciones personalizadas
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

      // Si pasa las validaciones, aquí podrías enviar el formulario por AJAX
      // o simplemente enviar el formulario de manera convencional:
      // form.submit();
      alert("¡Formulario enviado correctamente! Gracias por contactarnos.");
      form.reset();
    });
  }
});

// Función de validación de correo
function validarCorreo(email) {
  // Expresión regular básica para validar correo
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
