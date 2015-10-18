function inicio()
{
    var t=document.getElementById("graphic");

    var textcanvas= t.getContext("2d");
    lienzo = t.getContext("2d");
    textcanvas.font="bold 10px sans-serif";
    textcanvas.fillStyle= "white";
    textcanvas.fillText("0",25,475)
    textcanvas.fillText("1.100",70,475)
    textcanvas.fillText("1.200",115,475)
    textcanvas.fillText("1.300",160,475)
    textcanvas.fillText("1.400",205,475)
    textcanvas.fillText("1.500",250,475)
    textcanvas.fillText("1.600",295,475)
    textcanvas.fillText("1.700",340,475)
    textcanvas.fillText("1.800",385,475)
    textcanvas.fillText("1.900",430,475)
    textcanvas.fillText("2.000",475,475)
    textcanvas.fillText("2.100",520,475)
    textcanvas.fillText("2.200",565,475)
    textcanvas.fillText("2.300",610,475)
    lienzo.beginPath();
	lienzo.moveTo(25,450);
	lienzo.lineTo(625,450);
	lienzo.strokeStyle= "rgba(127, 127, 185, 1)"; 
	lienzo.closePath();
	lienzo.stroke();
}
	