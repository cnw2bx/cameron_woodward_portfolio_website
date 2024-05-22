<?php

// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("cameronwoodward0@gmail.com","My subject",$msg);
// if(isset($_POST['submit'])){
//   $to = "cameronwoodward0@gmail.com"; // this is your Email address
//   $from = $_POST['email']; // this is the sender's Email address
//   $name = $_POST['name'];
//   //$last_name = $_POST['last_name'];
//   $subject = $_POST['subject']
//   //$subject2 = "Copy of your form submission";
//   $message = $_POST['message']
//   //$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

//   $headers = "From:" . $from;
//   $headers2 = "From:" . $to;
//   mail($to,$subject,$message,$headers);
//   //mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
//   echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
//   // You can also use header('Location: thank_you.php'); to redirect to another page.
//   }

?>
