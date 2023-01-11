import { FizzBuzz, fizzbuzz2,FizzBuzz3 } from "../src/scripts/FizzBuzz";

describe.skip('FizzBuzz', () => {
    test('should return Buzz if is a divisible by 5', () => {

        //Given
        let numb = 5;

        //When
        const result = FizzBuzz(numb);


        //Then
        expect(result).toBe("Buzz");
        
    });
});



describe.skip('FizzBuzz', () => {
    test('should return FizzBuzz if is a divisible by 5 and by 3', () => {

        //Given
        let numb = 15;

        //When
        const result = fizzbuzz2(numb);


        //Then
        expect(result).toBe("FizzBuzz");
        
    });
});




    test('should return FizzBuzz if 1 to the 100', () => {
   for (let index = 0; index <=100; index++) {
    const result= FizzBuzz3(index);
    console.log(result);
    }
});
        
       
        
    