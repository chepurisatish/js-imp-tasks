let str = "welcome to world"
function reversewords(a){
let res =a.split(" ").map((word)=>word.split("").reverse().join(""))
console.log("1"+a.split(""))
return res.join(" ");
}
reversewords(str)
console.log(reversewords(str))