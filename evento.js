var canvas = document.getElementById("canvas");
var color = document.getElementById("color");
var grosor = document.getElementById("grosor");
var eliminar = document.getElementById("botoncito");

//Tipo dibujo 2D
var lienzo = canvas.getContext("2d");

//Obtener la posición del mouse sobre el lienzo
var rect = canvas.getBoundingClientRect();

var x=0, y=0, dibujando=false;

//Coordenadas de x y al oprimir el botón del mouse
canvas.addEventListener("mousedown", function (e) {
	x= e.clientX - rect.left;
	y= e.clientY - rect.top;
	dibujando=true;
});

//Iniciar el dibujo al mover el mouse
canvas.addEventListener("mousemove", function (e) {
	if (dibujando==true) {
		dibujar(x,y, e.clientX - rect.left, e.clientY - rect.top);
		x= e.clientX - rect.left;
		y= e.clientY - rect.top;
	}
});

//Dejar de dibujar al soltar el botón del mouse
canvas.addEventListener("mouseup", function () {
	dibujando=false;
});

//Eliminar el dibujo
eliminar.addEventListener("click", function () {
	if (confirm("¿Desea eliminar el dibujo?")) {
		lienzo.clearRect(0, 0, canvas.width, canvas.height);
	}
});

//Guardar dibujo con el nombre canva.png
function guardar() {        
      var link = document.createElement('a')
      link.download = "canva.png";
      link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      link.click();
    }

//Función con las opciones del dibujo
function dibujar(xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color.value;
  lienzo.lineWidth = grosor.value;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();  
}