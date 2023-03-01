<?php
if($_POST)
{	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["name"]) || !isset($_POST["email"]) || !isset($_POST["subject"]) || !isset($_POST["message"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$name        = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$email       = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$message 	 = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
	$subject 	 = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	
	$message_Body = "<strong>Name: </strong>". $name ."<br>";
	$message_Body .= "<strong>Email: </strong>". $email ."<br>";
	$message_Body .= "<strong>Subject: </strong>". $subject ."<br>";
	$message_Body .= "<strong>Message: </strong>". $message ."<br>";
	
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	$subject        = 'For Query';

	// send 1st mail
	$to_Email   	= "margregorioschurch71@gmail.com";
	$headers .= "Bcc: chrisbin95@gmail.com" . "\r\n";

	$sentMail = @mail($to_Email, $subject, $message_Body, $headers);
	
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => '⚠️ Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}


	// send 2nd mail
	$to_Email   	= "chrisbin95@gmail.com";
	$headers .= "Bcc: chrsibint@gmail.com" . "\r\n";

	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => '⚠️ Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}

	$sentMail = @mail($to_Email, $subject, $message_Body, $headers);

	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => '⚠️ Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}

	$output = json_encode(array('type'=>'message', 'text' => '👋 Hi '.$name .', Thankyou for sending your query. We will get in touch with you!'));
	die($output);
}
?>