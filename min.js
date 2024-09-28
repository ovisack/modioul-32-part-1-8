// let num=['ovisack','joy ','avoy', 'rual','jos']


// console.log(num.slice(2,3));

function num(arr){ 
     let number=arr.slice(2,3);
    if(typeof number==='string'|| 'Array' ){
        console.log('==>your rite man ');

    }else{
        console.log('=> your wrong man');
    }

 
   return number;
}
console.log(num(['mk','ki','lo', 'po','yu']));