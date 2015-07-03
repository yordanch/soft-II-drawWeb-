window.onload=inicio;
function inicio() {
	dibujarCanvas();
	drawW={
		color: "#000",
		forma: {
			circuloR: 5,
			recta: [4,4,1,5]
		}
	}
	dubujoCamenzar();
	window.onresize=Tamanio;
	var colorC=document.getElementById('col');
	colorC.addEventListener("change",cargarCol,false);
}
function dibujarCanvas(){
	var canvas=document.createElement('canvas');
	var campo=document.getElementById('canvasImprim');
	canvas.id="dibujito";
	campo.appendChild(canvas);
}
function dubujoCamenzar(){
	canvas=document.getElementById("dibujito");
	Tamanio();
	if(canvas.getContext){
		contexto=canvas.getContext("2d");
		document.getElementById('color').style.background=drawW.color;
	}else{
		alert("Disculpe por las molestias, pero no puedes dibujar, necesitas el navegador actualizado");
	}
	eventos();
}
function dibujarOb(e){
	contexto.beginPath();
	contexto.fillStyle = drawW.color;
	
	var _radio = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	var _posX = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);
	var _posY = 1 + Math.ceil(Math.random() * drawW.forma.circuloR);

	contexto.arc(e.layerX + _posX, e.layerY + _posY, _radio, 0, Math.PI * 2);
	contexto.fill();
}
function eventos(){
	canvas.addEventListener("mousedown", clickMouse);
}
function clickMouse(e){
	canvas.addEventListener("mousemove", moverMouse);
	//document.addEventListener("mousemove", moverMouse);
	document.addEventListener("mouseup", elimEv);
}
function moverMouse(e){
	dibujarOb(e);
}
function elimEv(){
	canvas.removeEventListener("mousemove", moverMouse);
}
function Tamanio(){
	var mat=document.getElementById('materiales');
	var can=document.getElementById('canvasImprim');
	var bE=document.getElementById('barraHerramientas');
	var CampoDibujo=document.getElementById('campoDraw');
	var tamHe=CampoDibujo.offsetHeight - bE.offsetHeight-20;
	canvas.width=CampoDibujo.offsetWidth-mat.offsetWidth-30;
	can.style.width=(CampoDibujo.offsetWidth-mat.offsetWidth-24)+"px";
	if (tamHe>=450){
		canvas.height=CampoDibujo.offsetHeight - bE.offsetHeight-20;
	}else{
		canvas.height=450;
	}
	//console.log(CampoDibujo.offsetHeight - bE.offsetHeight-20);
}
function cargarCol(){
	var etiquetaCol=document.getElementById('color');
	drawW.color=this.value;
	etiquetaCol.style.background=drawW.color;
}
function newCanvasL(){
	canvas.width=canvas.width;
	canvas.height=canvas.height;
}