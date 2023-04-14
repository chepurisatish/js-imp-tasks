// first way:-
// const arr1 = [
//     { id:1,name:"Sai"},
//     {id:2,  name:"Raju"},
//     {id:3,name:"swathi"},
//     {id:4, name:"vikas"},
//     {id:5, name:"Guna"} 
// ];
//  const arr2 = [
//     {id:1, salary:20000},
//     {id:2, salary:10000},
//     {id:3,salary:90000},
//     {id:4, salary:50000},
//     {id:5, salary:30000}
//  ];
//  const mergeArrays = (arr1 = [], arr2 =[]) => {
//     let res = [];
//     res = arr1.map(obj => {
//        const index = arr2.findIndex(el => el["id"] == obj["id"]);
//        const { salary } = index !== -1 ? arr2[index] : {};
//        return {
//           ...obj,
//           salary
//        };
//     });
//     return res;
//  };
//  console.log(mergeArrays(arr1, arr2));



// const a1 = [
//    { id:1,name:"Sai"},
//    {id:2,  name:"Raju"},
//    {id:3,name:"swathi"},
//    {id:4, name:"vikas"},
//    {id:5, name:"Guna"} 
// ];
// const a2 = [
//    {id:1, salary:20000},
//    {id:2, salary:10000},
//    {id:3,salary:90000},
//    {id:4, salary:50000},
//    {id:5, salary:30000}
// ];
// let arr3 = a1.map((item, i) => Object.assign({}, item, a2[i]));
// console.log(arr3);