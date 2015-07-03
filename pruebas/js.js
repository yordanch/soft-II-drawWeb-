window.onload=inicio;
function inicio(e){
	var div=document.getElementById('rectangulo');
	document.documentElement.addEventListener("click",function(e){
		var xD=div.offsetWidth;
		var yD=div.offsetHeight;
		div.style.left=e.clientX+"px";
		div.style.top=e.clientY+"px";
	});
}