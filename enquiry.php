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
	if(!isset($_POST["name"]) || !isset($_POST["datetime"]) || !isset($_POST["email"]) || !isset($_POST["event"]) || !isset($_POST["phone"]) || !isset($_POST["message"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$name        = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$email       = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$phone 	 = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$event 	 = filter_var($_POST["event"], FILTER_SANITIZE_STRING);
	$datetime 	 = filter_var($_POST["datetime"], FILTER_SANITIZE_STRING);
	$text = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
		    //$message_Body = "<strong>Name: </strong>". $name ."<br>";
	        //$message_Body .= "<strong>Email: </strong>". $email ."<br>";
	        //$message_Body .= "<strong>Phone No: </strong>". $phone ."<br>";
	        //$message_Body .= "<strong>Event: </strong>". $Event ."<br>";
	$message = '<html><body>';
    $message .= '<a href="https://directory.mosc.in/" title="KSGI"><img src="https://directory.mosc.in/library/themes/default/images/logo.jpg" alt="MOSC" style="width:280px;"/></a><br/>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
    $message .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
    $message .= "<tr><td><strong>Phone Number:</strong> </td><td>" . $phone . "</td></tr>";
    $message .= "<tr><td><strong>Event:</strong> </td><td>" . $event . "</td></tr>";
	$message .= "<tr><td><strong>Date & Time:</strong> </td><td>" . $datetime . "</td></tr>";
	$message . = "<strong>Message:</strong>". $text ."<br>";
	$message .= "</table>";
    $message .= "</body></html>";
	
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	$subject        = 'Course Enquiry';

	// send 1st mail
	$to_Email   	= "margregorioschurch71@gmail.com";
	$headers .= "Bcc: chrisbin95@gmail.com" . "\r\n";
	$sentMail = @mail($to_Email, $subject, $message, $headers);
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}

	// send 2nd mail
	$to_Email   	= "chrisbin95@gmail.com";
	$headers .= "Bcc: chrsibint@gmail.com" . "\r\n";
	$sentMail = @mail($to_Email, $subject, $message, $headers);
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}

	$output = json_encode(array('type'=>'message', 'text' => 'Hello '.$name .', Thankyou for submitting your enquiry. We will contact you soon!'));
	die($output);
}
?>