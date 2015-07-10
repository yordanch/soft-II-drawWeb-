<?php
	require_once('ClassDrawWeb.php');
	//$Db_snd=new Db_snd();
	//$Db_snd->coneccion();
	$dw=new Drawing();
	$dw->coneccion();
	$dw->setUsuario('snd');
	$dw->setCorreo('snd@s');
	$dw->setContrasena('123456');
	$dw->setNombre('yordanch');
	$dw->setApellido('vargas velasque');
	$dw->setImagen('hola.png');
	//$dw->registerUser();
	$dw->login();
	if($dw->getResultado()!=1){
		echo "usuario no existe ".$dw->getResultado()." es: ";
	}
	else{
		echo "usuario encontrado ".$dw->getResultado().mysql_result($dw->getConsultaDB(),0,'apellido');
	}
	//'SET @p0='.$this->usuario.'; SET @p1='.$this->correo.'; SET @p2='.$this->contrasena.'; SET @p3='.$this->nombre.'; SET @p4='.$this->apellido.'; SET @p5='.$this->imagen.'
?>