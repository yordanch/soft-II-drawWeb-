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
			$DW->existenciaUser();
			if($DW->getResultado()==1){
				echo "el usuario <span style='font-weight:bold'>".$DW->getUsuario()."</span> no fue registrado con exito, el error podria ser de que el usuario ya existe, para ello vuelva a intentarlo, click en la imagen.<div><img src='imagenes/logos/triste.png' onclick=\"ingresarSaUser('registro')\"></div>";
			}else{
				$DW->registerUserNewAdd();
				if(mkdir('../imagenes/users/'.$DW->getUsuario(),0777)){}
				echo "el usuario <span style='font-weight:bold'>".$DW->getUsuario()."</span> fue registrado con exito, ahora ya puedes disfrutar de los beneficios que te ofrece la pagina, para ello click en la imagen o click en el boton salir.<div><img src='imagenes/logos/feliz.png' onclick=\"ingresarSaUser('logeo')\"></div>";
			}
		}
	}else{
		if(isset($_GET['typeIm']) && isset($_GET['nombreUs']) && isset($_GET['nombreImg'])){
			$nombreUs=$_GET['nombreUs'];
			$nombreImg=$_GET['nombreImg'];
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