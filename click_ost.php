<?php
require 'index.html';
if($_SERVER['REQUEST_METHOD']=='POST'){ 
$from='cr@codefam.kz';
$to = "dushurbakiev@gmail.com"; 
$tema = "Форма обратной связи на PHP"; 
$message = "Ваше имя: ".$_POST['user_name']."<br>";
$message .= "Номер телефона: ".$_POST['user_phone']."<br>"; 

$headers ="From:".$from. "\r\n";
$headers  .= 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers); 
echo $message;
}
?>