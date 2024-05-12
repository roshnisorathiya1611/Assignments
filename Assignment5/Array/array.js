let arr = [7,15,26,9,20,15,8,3];

let value = document.getElementById("array").innerHTML = "<b> Array Value : </b>" + arr

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
let remove = document.getElementById("remove").innerHTML = "<b>Remove The duplicate Value : </b>" + (removeDuplicates(arr))
console.log(removeDuplicates(arr));