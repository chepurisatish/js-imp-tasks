let arry = [5,2,8,7,3,5]
let num = [];
let res=[]

function get(array){
    for(i=0;i<array.length;i++){
        for(j=1;j<array.length;j++){
            if(array[i]+array[j]==10){
                if(!num.includes(array[i]) &&! num.includes(array[j])){
                    num.push(array[i])
                    res.push([array[i],array[j]])

                }
  }      
  }
}
  console.log(res)
}
get(arry)