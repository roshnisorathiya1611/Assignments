
function Vowel(str) { 

    var count = str.match(/[aeiou]/gi).length;

    return count;
}
var string = "ittalenthub";
var number = document.getElementById("vowelnumber").innerHTML = "<b>Vowels String : </b>" + string;

var result = Vowel(string);

var countofnumber = document.getElementById("count").innerHTML = "<b>Count Of Vowels Number : </b>" + result;

console.log(result);
