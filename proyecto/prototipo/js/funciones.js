window.onload=inicio;
function inicio() {
	dibujarCanvas();
	dubujoCamenzar();
}
function dibujarCanvas(){
	var canvas=document.createElement('canvas');
	var campo=document.getElementById('canvasImprim');
	canvas.id="dibujito";
	campo.appendChild(canvas);
}
function dubujoCamenzar(){
	canvas=document.getElementById("dibujito");
	if(canvas.getContext){
		contexto=canvas.getContext("2d");
	}else{
		alert("Disculpe por las molestias, pero no puedes dibujar, necesitas el navegador actualizado");
	}
}