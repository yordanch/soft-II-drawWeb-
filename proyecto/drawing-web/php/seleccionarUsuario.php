<?php
	session_start();
	if(isset($_SESSION['USUARIO'])){
		if($_SESSION['USUARIO']!="" || $_SESSION['USUARIO']!=" "){
			require_once('ClassDrawWeb.php');
			$DW=new Drawing();
			$DW->coneccion();
			$DW->setUsuario($_SESSION['USUARIO']);
			$DW->datoUser();
			
			echo $_SESSION['USUARIO'].":".mysql_result($DW->getConsultaDB(),0,'nombre').":".mysql_result($DW->getConsultaDB(),0,'imagen');
		}
	}
	session_destroy();
?>