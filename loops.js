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
  while (maybeTrue()){
    console.log("done")
  }
}
function doWhileLoop(array){
  do {
    
  } while (array.length > 0 && maybeTrue())
}