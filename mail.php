<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "lauraeberge@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";

    if ($_POST['submit']) {
        if (mail ($to, $subject, $body, "From: $name <$email>")) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    }
?>