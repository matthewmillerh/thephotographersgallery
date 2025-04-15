<?php

//error_reporting(E_ALL);
error_reporting(E_STRICT);

date_default_timezone_set('America/Toronto');

require_once('./PHPMailer_5.2.0/class.phpmailer.php');

$mail = new PHPMailer();

$body = "Name: ".$_REQUEST['name']."<br><br>";
$body .= "Email: ".$_REQUEST['email']."<br><br>";
$body .= "Code: ";
$body .= $_REQUEST['code']."<br><br>";
$body .= "Questions<br><br>".$_REQUEST['textarea'];

$mail->IsSMTP();
$mail->SMTPAuth   = true;                  // enable SMTP authentication
//$mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
$mail->Host       = "smtp.mweb.co.za";      // sets GMAIL as the SMTP server
$mail->Port       = 25;                   // set the SMTP port for the GMAIL server
$mail->Username   = "galleryinfo@mweb.co.za";  // GMAIL username
$mail->Password   = "carsten";            // GMAIL password
$mail->SMTPDebug = 1;

$mail->SetFrom('galleryinfo@mweb.co.za', 'Website Order');
$mail->Subject = "Request to purchase";
$mail->AddReplyTo('galleryinfo@mweb.co.za', 'Reply');
$mail->ReturnPath='galleryinfo@mweb.co.za';
$mail->MsgHTML($body);

$address = "matthewmillerh@outlook.com";
$mail->AddAddress($address, "Photogallery");


if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
	header("Location: http://localhost/Photographer/index.html");
	die();
}

?>