function forLoop(array){
  for (let i = 0; i < 25; i++) {
    console.log(`I am ${i} strange loops.`)
  }
  return array
}
function whileLoop(n){
 
  function maybeTrue(){
    return Math.random() >= 5
  } 
  let countdown = 5;
  while (countdown > 0){
    console.log(--countdown)
   }
}
function doWhileLoop(array){
  do {
    
  } while (array.length > 0 && maybeTrue())
}