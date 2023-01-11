export function FizzBuzz(numb){
 if (numb % 5 == 0) {
    return ("Buzz");
 }
}


 export function fizzbuzz2(numb){
    if (numb % 5 == 0 || numb % 3 == 0) {
        return ("FizzBuzz");
    }
}


export function FizzBuzz3(numb){
    if (numb % 3 == 0) {
        return "Fizz";
    }else if(numb % 5 == 0){
       return "Buzz";
    }else if(numb % 15 == 0){
       return "FizzBuzz";
    }
    return numb;
}
       

    
    
   


