<?php


// here we check if all fields are filled.
$required = array('clientName', 'clientPhone', 'clientEmail', 'clientMsg');
$error = false;

if (empty($_REQUEST['clientName'])) {
	$error = true;
}

if (empty($_REQUEST['clientPhone']) && empty($_REQUEST['clientEmail'])) {
	$error = true;
}

if (empty($_REQUEST['clientMsg'])) {
	$error = true;
}


if ($error) {
	echo 'MISS';
} else {

	$name = strip_tags($_REQUEST['clientName']);
	$phone = strip_tags($_REQUEST['clientPhone']);
	$email = strip_tags($_REQUEST['clientEmail']);
	$message = strip_tags($_REQUEST['clientMsg']);

	$fullmessage = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTlf: " . $telefono . "\nMensaje: " . $message;

	$to = 'info@garoxinstalacionesyreformas.com';
	$subject = $name .' te ha escrito desde la web garoxinstalacionesyreformas.com';
	$send_email = mail($to, $subject, $fullmessage, $email);


	if ($send_email == false) {
		echo 'ERROR';
	} else {
		echo 'SUCCESS';
	}
}
?>