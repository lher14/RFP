<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email_address"];
    $phone = $_POST["phone"];
    $category = $_POST["category"];
    $date = $_POST["date"];
    $message = $_POST["message"];

    $to = "gauliensmith@yahoo.com";
    $subject = "Appointment Request from $name";
    $headers = "From: $email";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Category: $category\n";
    $email_content .= "Date: $date\n\n";
    $email_content .= "Message:\n$message";

    mail($to, $subject, $email_content, $headers);
}
?>