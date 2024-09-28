function greeting(greetingHandler,name){
    greetingHandler(name);
}


// const number =5;


// greeting(number)

function greetingHandler(name){
    console.log('good morning',name);
}

greeting(greetingHandler)