<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('hola@emedsgn.com', $asunto, $mensaje)){
		header('Location: index.html#form__contact'); // confirmacion.html debe existir
	}
 ?>