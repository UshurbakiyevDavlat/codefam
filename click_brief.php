<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/POP3.php';
require 'PHPMailer-master/src/OAuth.php';
require 'PHPMailer-master/src/Exception.php';
require 'index.html';


if($_SERVER['REQUEST_METHOD']=='POST' || $_SERVER['REQUEST_METHOD']=='FILES'){ 
$message = "Имя клиента: ".$_POST['user_name']."<br>";
$message .= "Номер телефона: ".$_POST['user_phone']."<br>"; 
$message .= "Компания: ".$_POST['user_co']."<br>"."<br>"; 
$message .= "Чем занимается? ".$_POST['user_job']."<br>"; 
$message .= "В чем его задача? ".$_POST['user_aim']."<br>"; 
$message .= "Каким он видит решение задачи? ".$_POST['user_vision']."<br>"."<br>"; 
$message .= "Ожидания : ".$_POST['user_exept']."<br>"; 
$message .= "Сколько денег готов потратить ".$_POST['user_money']."<br>";
$filename1= $_FILES['user_file'];

    $mail = new PHPMailer(true);
    $mail->setFrom('cr@codefam.kz', 'First Last');
    $mail->addAddress("fitikes826@stevefotos.com", 'John Doe');
    $mail->Subject = "Бриф";
    $mail->msgHTML($message);
    $mail->addAttachment($filename1);
    $r = $mail->send();

echo $message;
}
?>