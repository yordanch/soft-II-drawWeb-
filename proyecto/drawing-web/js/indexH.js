function ingresarSaUser(tipo){
	switch(tipo){
		case 'logeo': Cargar('ventanas/logeo.html','flotante'); break;
		case 'registro': Cargar('ventanas/register.html','flotante'); break;
		case 'edit': Cargar('ventanas/editUser.php','flotante'); break;
		case 'recover': Cargar('ventanas/recuperarContra.php','flotante'); break;
	}
	flotante('show');
}
function cerrarForm(){
	flotante('hidden');
	setTimeout(function(){
		limpiarFlotante();
	},500);
}
function limpiarFlotante(){
	var tag=document.getElementById('flotante');
	tag.innerHTML='';
}
function userSelect(){
	var respuestaAJX = new XMLHttpRequest();
	var url='php/seleccionarUsuario.php';
	respuestaAJX.open('POST',url,true);
	respuestaAJX.onreadystatechange=function(){
		if(respuestaAJX.readyState==4){
			if(respuestaAJX.responseText!="" || respuestaAJX.responseText!=" "){
				localStorage.setItem('userDrag',respuestaAJX.responseText);
				document.getElementById('entrarYa').click();
			}
		}
	}
	respuestaAJX.send(null);
}
function closeSession(){
	localStorage.removeItem("userDrag");
	document.location.reload();
}
function cargarDatImagenUser(){
	var cajaIMg=document.getElementById('img');
	var cajaNameUs=document.getElementById('user');
	var arregloDatos=[];
	if(localStorage.getItem("userDrag")){
		arregloDatos=localStorage.getItem("userDrag").split(':');
		cajaIMg.style.backgroundImage="url('imagenes/"+arregloDatos[2]+"')";
		if(arregloDatos[1]!="" || arregloDatos[1]!=" "){
			cajaNameUs.innerHTML=arregloDatos[1];
		}else{
			cajaNameUs.innerHTML=arregloDatos[0];
		}
		var cajaSave=document.getElementById('Guardar');
		var viewSavePro=document.getElementById('verHecho');
		cajaSave.style.display="inline-block";
		viewSavePro.style.display="inline-block";
		viewSavePro.innerHTML='<a id="holaHome" href="ventanas/home.php?userDra='+arregloDatos[0]+'"></a>';
	}
}