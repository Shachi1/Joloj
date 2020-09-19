
var myVar1 = setInterval(ph, 2000);
function ph() {
var pH = (Math.random() * 6).toFixed(3);
   document.getElementById("demo1").innerHTML = pH;
   if (pH < 1) {
	document.getElementById("demopH").innerHTML = "Increase Level";
   }
   else if (pH > 6) {
	document.getElementById("demopH").innerHTML = "Decrease Level";
   }
   else {
	document.getElementById("demopH").innerHTML = "Normal pH level";
   }
}
var myVar2 = setInterval(tds, 2000);
function tds() {
   var TDS = (Math.random() * 10).toFixed(3);
   document.getElementById("demo2").innerHTML = TDS;
   if (TDS > 10) {
	document.getElementById("demoTDS").innerHTML = "Increase Level";
   }
   else {
	document.getElementById("demoTDS").innerHTML = "Normal TDS level";
   }
}
var myVar3 = setInterval(amonia, 2000);
function amonia() {
var Amonia = (Math.random() * 100).toFixed(3);
   document.getElementById("demo3").innerHTML = Amonia;
   if (Amonia > 1) {
	document.getElementById("demoAmonia").innerHTML = "Add a source of organic carbon. If the dissolved oxygen concentration is adequate, adding a source of organic carbon, such as chopped hay";
   }
   else {
	document.getElementById("demoAmonia").innerHTML = "Normal Amonia level";
   }
}
var myVar4 = setInterval(temp, 2000);
function temp() {
var Temp = (Math.random() * 30).toFixed(3);
   if (Temp < 18.000) {
   Temp=28.157;
   }
   document.getElementById("demo4").innerHTML = Temp;
   if (Temp < 2) {
	document.getElementById("demoTemp").innerHTML = "Turn on the Heater";
   }
   else if (Temp > 28) {
	document.getElementById("demoTemp").innerHTML = "Turn on the Cooler";
   }
   else {
	document.getElementById("demoTemp").innerHTML = "Normal Temperature ";
   }
}
var myVar5 = setInterval(Terbidity, 2000);
function Terbidity() {
var terbidity = (Math.random() * 10).toFixed(3);
   document.getElementById("demo5").innerHTML = terbidity;
   if (terbidity < 5) {
	document.getElementById("demoTerbidity").innerHTML = "Speed up the Turbulator";
   }
   else {
	document.getElementById("demoTerbidity").innerHTML = "Normal Turbidity";
   }
}
var myVar6 = setInterval(DO, 2000);
function DO() {
var Do = (Math.random() * 6).toFixed(3);
   document.getElementById("demo6").innerHTML = Do;

   if (Do < 5) {
   	document.getElementById("demoDO").innerHTML = "Force pressurized air into the water with diffusers";
      }
   else {
	document.getElementById("demoDO").innerHTML = "Normal DO level";
   }
}

var myVar7 = setInterval(Decision, 2000);
function Decision() {
document.getElementById("demo7").innerHTML = Des;

}