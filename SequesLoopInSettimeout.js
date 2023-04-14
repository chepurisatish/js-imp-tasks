// function doSetTimeout(i) {
//     setTimeout(function() {
//       console.log(i)
//     }, 1000*i);
//   }
  
//   for (var i = 1; i <= 5; ++i)
//     doSetTimeout(i);

function get(){
  for (let i = 1; i <=5; i++) {
      setTimeout(function() {
        console.log(i)
      }, 2000*i);
  }
}
get()