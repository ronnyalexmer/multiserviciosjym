<?php
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

	$name =  utf8_decode(strip_tags($_REQUEST['clientName']));
	$phone = utf8_decode(strip_tags($_REQUEST['clientPhone']));
	$email = utf8_decode(strip_tags($_REQUEST['clientEmail']));
	$message = utf8_decode(strip_tags($_REQUEST['clientMsg']));

	$fullmessage = "Nombre: " . $name . "\nCorreo: " . $email . "\nTlf: " . $phone . "\nMensaje:\n" . $message;

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