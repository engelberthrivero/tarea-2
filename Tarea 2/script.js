
// Obtener los elementos del documento
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
var error = document.getElementById("error");
var success = document.getElementById("success");
var commentList = document.getElementById("comment-list");

// Agregar un evento de clic al botón de enviar
submit.addEventListener("click", function() {
  // Obtener los valores de los campos de entrada
  var nameValue = name.value.trim();
  var emailValue = email.value.trim();
  var messageValue = message.value.trim();

  // Validar los valores de entrada
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    // Mostrar el mensaje de error
    error.innerHTML = "Por favor, rellena todos los campos.";
    error.style.display = "block";
    // Ocultar el mensaje de éxito
    success.style.display = "none";
    // Agregar la clase inactive al mensaje de error
    error.classList.add("inactive");
    // Remover la clase inactive al mensaje de error después de 0.5 segundos
    setTimeout(function() {
      error.classList.remove("inactive");
    }, 500);
  } else {
    // Ocultar el mensaje de error
    error.style.display = "none";
    // Mostrar el mensaje de éxito
    success.innerHTML = "Tu comentario ha sido enviado con éxito.";
    success.style.display = "block";
    // Agregar la clase inactive al mensaje de éxito
    success.classList.add("inactive");
    // Remover la clase inactive al mensaje de éxito después de 0.5 segundos
    setTimeout(function() {
      success.classList.remove("inactive");
    }, 500);
    // Crear un nuevo elemento de comentario
    var commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.innerHTML = `
      <div class="comment-avatar">
        <img src="images/avatar.png" alt="Avatar">
      </div>
      <div class="comment-content">
        <div class="comment-header">
          <div class="comment-name">${nameValue}</div>
          <div class="comment-date">Ahora mismo</div>
        </div>
        <div class="comment-body">
          <p>${messageValue}</p>
        </div>

