<?php
// Recibir datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Construir el correo electrónico
$para = 'hola@emedsgn.com';
$asunto = 'Nuevo mensaje desde el formulario de contacto';
$mensajeCorreo = "Nombre: $nombre\n";
$mensajeCorreo .= "Email: $email\n";
$mensajeCorreo .= "Mensaje:\n$mensaje";

// Enviar el correo electrónico
mail($para, $asunto, $mensajeCorreo);
?>
