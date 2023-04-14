// let arry = [1,[2],[3,[4]]];
// console.log(arry.flat(2))\


let arry = [1,[2],[3,[4,[5,[8,9]]]]];
function user(arry){
    let result = [];

    for(i=0;i<arry.length;i++){
        if(typeof(arry[i]) === "number"){
            result.push(arry[i])
            console.log("push "+ result )
        }
        else{
            result = result.concat(user(arry[i]))
            console.log("res "+result)
        }
        // console.log(result)
    }
    return result;
}
// user(arry)
console.log(user(arry))
