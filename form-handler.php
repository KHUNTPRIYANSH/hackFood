<?php
$Name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_sub = $_POST['sub'];
$visitor_massage = $_POST['massage'];

$email_from = 'khuntpriyansh1@gmail.com'
$email_sub = 'New Form Submission'
$email_body = "User Name : $Name.\n".
 "User Email : $visitor_mail.\n".
 "User Subject : $visitor_sub.\n".
 "User Massage : $visitor_massage.\n";
$to = 'khuntpriyansh@gmail.com'
$headers = "From : $email_from \r\n";
$headers .= "Reply to : $visitor_email" \r\n;

mail($to,$email_sub,$email_body,$headers);
header("Location: contact.html")

?>