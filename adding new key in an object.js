const array = 
    [ {id:1,name:"text1"}, {id:2,name:"text2"} ,{id:3,name:"text3"}];
const result =  array.map((item) => ({...item,age:item.id}));
console.log(result)
