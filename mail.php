<?php
require 'class.phpmailer.php';

$subject = 'Order from site "Realestate"';
$yourmail = "Realestate";

$form = $_POST['form'];
$buy_city = $_POST['buy_city'];
$buy_comm = $_POST['buy_comm'];
$buy_school = $_POST['buy_school'];
$buy_zip = $_POST['buy_zip'];
$buy_other = $_POST['buy_other'];
$buy_style = $_POST['buy_style'];
$buy_budget = $_POST['buy_budget'];
$buy_timeframe = $_POST['buy_timeframe'];

$msg = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>$subject</h2>\r\n";
$msg .= "<p><strong style='font-weight:bold'>Form name: </strong> ".$form."</p>\r\n";
if($_REQUEST['name'] != null){
	$msg .= "<p><strong>Name: </strong> ".$name."</p>\r\n";
}
if($_REQUEST['phone'] != null){
	$msg .= "<p><strong style='font-weight:bold'>Phone: </strong> ".$phone."</p>\r\n";
}
if($_REQUEST['mail'] != null){
	$msg .= "<p><strong style='font-weight:bold'>Email: </strong> ".$mail."</p>\r\n";
}



$mail = new PHPMailer();
$mail->From = $yourmail;
$mail->FromName = 'Realestate';
$mail->AddAddress('cactus_09@mail.ru', '');
$mail->IsHTML(true);
$mail->Subject = 'New order from site "Realestate"';
if (isset($_FILES['upload']))
{
	if ($_FILES['upload']['error'] == 0)
	{
		$mail->AddAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);
	}
}else{
	$msg .= "<p>Файл не прикреплен</p>";
}
$msg .= "</body></html>";
$mail->Body = $msg;
if (!$mail->Send()) die('Mailer Error: ' . $mail->ErrorInfo);
?>
