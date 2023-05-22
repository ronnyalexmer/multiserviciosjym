<?php
$error = false;

if (empty($_POST['clientName'])) {
	$error = true;
}

if (empty($_POST['clientPhone']) && empty($_POST['clientEmail'])) {
	$error = true;
}

if (empty($_POST['clientMsg'])) {
	$error = true;
}

if ($error) {
	echo 'MISS';
} else {

	$name = strip_tags($_POST['clientName']);
	$phone = strip_tags($_POST['clientPhone']);
	$email = strip_tags($_POST['clientEmail']);
	$message = strip_tags($_POST['clientMsg']);

	$fullmessage = "Nombre: " . $name . "\nCorreo: " . $email . "\nTlf: " . $phone . "\nMensaje: " . $message;

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