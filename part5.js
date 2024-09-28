function calculet(){
    let bool= 10;
    return function(){
       bool --; 
       return bool; 
    }
   
}
 const fastu= calculet();
console.log(fastu());
console.log(fastu());
console.log(fastu());
console.log(fastu());
console.log(fastu());
console.log(fastu());