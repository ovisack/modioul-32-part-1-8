function noNegative(a,b){
    if(a< 0|| b<0){
        return
    }
    return a+ b;
}

const total = noNegative(2,5);
console.log(total);