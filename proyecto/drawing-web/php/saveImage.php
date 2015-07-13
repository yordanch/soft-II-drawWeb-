<?php
	if(isset($_GET['typeIm']) && isset($_GET['nombreUs']) && isset($_GET['nombreImg'])){
		$nombreUs=$_GET['nombreUs'];
		$nombreImg=$_GET['nombreImg'];
		echo $nombreUs."->".$nombreImg;
	}else{
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
?>