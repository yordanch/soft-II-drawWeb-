function ingresarSaUser(){
	Cargar('ventanas/logeo.html','flotante');
	flotante('show');
}
function cerrarForm(){
	flotante('hidden');
	setTimeout(function(){
		limpiarFlotante();
	},1000);
}
function limpiarFlotante(){
	var tag=document.getElementById('flotante');
	tag.innerHTML='';
}