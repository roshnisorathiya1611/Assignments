var celsius=32;
var farenheit;

//farenheit conversion
document.getElementById("Farenheit").innerHTML = "Celcius to Farenheit conversion";

document.getElementById("value1").innerHTML = "Value of celsius &nbsp:&nbsp" + celsius;

farenheit=(celsius*1.8)+32;

document.getElementById("value2").innerHTML = "Farenheit Conversion &nbsp:&nbsp" + farenheit;

document.getElementById("celcius").innerHTML = "Farenheit to celcius conversion";

// celsius conversion
var farenheit1=39.6;
var celsius1;

document.getElementById("value3").innerHTML = "Value of farenheit &nbsp:&nbsp" + farenheit1;

celsius1=(farenheit1-32)/1.8;

document.getElementById("value4").innerHTML = "Celsius Conversion &nbsp:&nbsp" + celsius1;
