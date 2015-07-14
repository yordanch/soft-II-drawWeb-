<?php
	if(isset($_GET['typeImRegi'])){
		if(isset($_GET['usuario']) && isset($_GET['correo']) && isset($_GET['contrasena'])){
			//usuario='+usuario.value+'&correo='+correo.value+'&contrasena='+contrasena.value
			require_once('ClassDrawWeb.php');
			$DW=new Drawing();
			$DW->coneccion();
			$DW->setUsuario($_GET['usuario']);
			$DW->setCorreo($_GET['correo']);
			$DW->setContrasena($_GET['contrasena']);
			$DW->registerUserNewAdd();
		}
	}else{
		if(isset($_GET['typeIm']) && isset($_GET['nombreUs']) && isset($_GET['nombreImg'])){
			$nombreUs=$_GET['nombreUs'];
			$nombreImg=$_GET['nombreImg'];
			if(mkdir('../imagenes/users/snd',0777)){}
			echo "<div id=\"showMMSResult\">imagen guardado correctamente con ".$nombreUs."->".$nombreImg."<br><img src='imagenes/logos/feliz.png'></div>";
		}
		else{
			$data = file_get_contents("php://input");
			$filteredData=substr($data, strpos($data, ",")+1);
			$decodedData=base64_decode($filteredData);
			$fic_name = 'dibujoDrawW'.rand(1000,9999).'.png';
			$fp = fopen('../save/snd-yvv/'.$fic_name, 'wb');
			$ok = fwrite( $fp, $decodedData);
			fclose( $fp );
			if($ok) echo $fic_name;
			else echo "ERROR";
		}
	}
?>