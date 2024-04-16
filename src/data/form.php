<?php
// Configura las variables con la información del servidor de correo electrónico
$destinatario = 'hola@emedsgn.com';
$asunto = 'Nuevo mensaje desde el formulario';

// Obtiene los datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Construye el cuerpo del mensaje
$cuerpoMensaje = "Nombre: $nombre\n";
$cuerpoMensaje .= "Email: $email\n";
$cuerpoMensaje .= "Mensaje:\n$mensaje";

// Configura las cabeceras del correo electrónico
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envía el correo electrónico
mail($destinatario, $asunto, $cuerpoMensaje, $headers);

// Puedes responder al cliente indicando que el correo se ha enviado correctamente
echo 'Correo enviado con éxito';
?>
