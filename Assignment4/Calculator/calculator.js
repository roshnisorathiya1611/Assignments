var num1 = 60;
var num2 = 20;
var sum = "+";
var sub = "-";
var mul = "*";
var division = "/";



document.getElementById("number1").innerHTML = "Number 1 &nbsp:&nbsp" + num1;
document.getElementById("number2").innerHTML = "Number 2 &nbsp:&nbsp" + num2;

    //Add
    if(sum === "+")
        {
            sumNumber = num1 + num2; 
            console.log(sumNumber);
            document.getElementById("add").innerHTML =
            "Sum of two numbers is &nbsp:&nbsp" + sumNumber;
        }

    //Sub
    if(sub === "-")
        {
            subNumber = num1 - num2;
            console.log(subNumber);
            document.getElementById("sub").innerHTML = "Subtraction of two number is &nbsp:&nbsp" + subNumber;
        }

    //Mul
    if(mul === "*")
        {
            mulNumber = num1 * num2;
            console.log(mulNumber);
            document.getElementById("mul").innerHTML = "Multiplication of two number is &nbsp:&nbsp" + mulNumber;
        }

    //division
    if(division === "/")
        {
            divNumber = num1 / num2;
            console.log(divNumber);
            document.getElementById("division").innerHTML = "Division of two number is &nbsp:&nbsp" + divNumber;
        }
    