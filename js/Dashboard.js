	var myVar1 = setInterval(ph, 2000);
	function ph() {
	var pH = (Math.random() * 10).toFixed(3);
	   document.getElementById("demo1").innerHTML = pH;
	   if (pH < 6) {
		document.getElementById("demopH").innerHTML = "Increase Level";
	   }
	   else if (pH > 8) {
		document.getElementById("demopH").innerHTML = "Decrease Level";
	   }
	   else {
		document.getElementById("demopH").innerHTML = "Normal Level";
	   }
	}
	var myVar2 = setInterval(tds, 2000);
	function tds() {
	   var TDS = (Math.random() * 10).toFixed(3);
	   document.getElementById("demo2").innerHTML = TDS;
	   if (TDS < 5) {
		document.getElementById("demoTDS").innerHTML = "Increase Level";
	   }
	   else {
		document.getElementById("demoTDS").innerHTML = "Decrease Level";
	   }
	}
	var myVar3 = setInterval(amonia, 2000);
	function amonia() {
	var Amonia = (Math.random() * 1).toFixed(3);
	   document.getElementById("demo3").innerHTML = Amonia;
	   if (Amonia > 2) {
		document.getElementById("demoAmonia").innerHTML = "Decrease Level";
	   }
	   else {
		document.getElementById("demoAmonia").innerHTML = "Normal Level";
	   }
	}
	var myVar4 = setInterval(temp, 2000);
	function temp() {
	var Temp = (Math.random() * 45).toFixed(3);
	   if (Temp < 12.000) {
	   Temp=28.157;
	   }
	   document.getElementById("demo4").innerHTML = Temp;
	   if (Temp < 25) {
		document.getElementById("demoTemp").innerHTML = "Increase Level";
	   }
	   else if (Temp > 35) {
		document.getElementById("demoTemp").innerHTML = "Decrease Level";
	   }
	   else {
		document.getElementById("demoTemp").innerHTML = "Normal Level";
	   }
	}
	var myVar5 = setInterval(Terbidity, 2000);
	function Terbidity() {
	var terbidity = (Math.random() * 10).toFixed(3);
	   document.getElementById("demo5").innerHTML = terbidity;
	   if (terbidity < 5) {
		document.getElementById("demoTerbidity").innerHTML = "Increase Level";
	   }
	   else {
		document.getElementById("demoTerbidity").innerHTML = "Decrease Level";
	   }
	}
	var myVar6 = setInterval(DO, 2000);
	function DO() {
	var Do = (Math.random() * 10).toFixed(3);
	   document.getElementById("demo6").innerHTML = Do;
	   if (Do < 5) {
		document.getElementById("demoDO").innerHTML = "Increase Level";
	   }
	   else {
		document.getElementById("demoDO").innerHTML = "Decrease Level";
	   }
	}