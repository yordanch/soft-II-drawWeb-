window.onload=inicio;
function inicio() {
	dibujarCanvas();
	dubujoCamenzar();
	Tamanio();
	window.onresize=Tamanio;
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
		contexto.strokeRect(20,20,20,20);
		contexto.stroke();
	}else{
		alert("Disculpe por las molestias, pero no puedes dibujar, necesitas el navegador actualizado");
	}
}
function Tamanio(){
	var mat=document.getElementById('materiales');
	var can=document.getElementById('canvasImprim');
	var CampoDibujo=document.getElementById('campoDraw');
	canvas.width=CampoDibujo.offsetWidth-mat.offsetWidth-30;
	console.log(CampoDibujo.offsetWidth-mat.offsetWidth);
}