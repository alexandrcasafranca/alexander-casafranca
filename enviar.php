<?php
    $destino = 'brunoalexander_dg@outlook.es';
    $fullName = $_POST['fullname'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $item = $_POST['item'];
    $telephone = $_POST['telephone'];
    $serviceList = $_POST['serviceList'];
    $message = $_POST['message'];

    $contenido = "Nombre Completo: ".$fullname."\nE-mail: ".$email."\nEmpresa: ".$company."\nRubro: ".$item                ."\nTeléfono: ".$telephone."\nServicio: ".$serviceList."\nMensaje: ".$message;
    mail($destino, "Asunto", $contenido);
    header("Location:index.html");
?>