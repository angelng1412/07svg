var c = document.getElementById("svg");
var clear = document.getElementById("clear");

var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;

var first = true;


var draw = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 10);
    c1.setAttribute("fill", "#ff0000"); 
    c.append(c1);

    if (first){
	x1 = e.offsetX;
	y1 = e.offsetY;
	first = false;
    }
    else{
	x2 = x1;
	y2 = y1; 
	x1 = e.offsetX;
	y1 = e.offsetY;
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	c1.setAttribute("x1", x1);
	c1.setAttribute("y1", y1);
	c1.setAttribute("x2", x2);
	c1.setAttribute("y2", y2);
	c1.setAttribute("stroke", "#000000");
	c.append(c1);
    }
}
c.addEventListener("click", draw);


var erase = function(e){
    c.innerHTML = "";
    x1 = 0;
    x2 = 0; 
    first = true;
}
clear.addEventListener("click", erase); 
