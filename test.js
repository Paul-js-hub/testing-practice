const myStringLength = require('./myStringLength');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const capitalize = require('./capitalize')

describe('my string length', ()=>{
    test('string length is: ', ()=>{
        //Act
    let myStrLength = myStringLength('paul');

    //Assert
    expect(myStrLength).toBe(4);
    });

    test('check if string is empty', ()=>{
        //Assert
        expect(() => myStringLength('')).toThrowError('String is empty');
    });

    test('check if string is greater than 10', ()=>{
        //Act
        let myStrLength = ()=> myStringLength('pauloncherahesbon');

        //Assert
        expect(myStrLength).toThrow('string has more than 10 characters')
    })
})

test('reverse a string', ()=>{
    //Act
    let reverseStr = reverseString('paul');
    expect(reverseStr).toBe('luap');
});

let calculatorObj = Object.create(calculator);

describe('calculator', ()=>{
    describe('check add functionality', ()=>{
        test('check add two numbers', ()=>{
            //Act
            let addTwoNumbers = calculatorObj.add(1, 2);

            //Assert
            expect(addTwoNumbers).toBe(3);
        });

        test('check add two numbers', ()=>{
            //Act
            let addTwoNumbers = calculatorObj.add(5, 2);

            //Assert
            expect(addTwoNumbers).toBe(7);
        });

        test('check add two numbers', ()=>{
            //Act
            let addTwoNumbers = calculatorObj.add(100, 2);

            //Assert
            expect(addTwoNumbers).toBe(102);
        });
    });

    describe('check subtract functionality', ()=>{
        test('check subtract two numbers', ()=>{
            //Act
            let subtractTwoNumbers = calculatorObj.subtract(1, 2);

            //Assert
            expect(subtractTwoNumbers).toBe(-1);
        });

        test('check subtract two numbers', ()=>{
            //Act
            let subtractTwoNumbers = calculatorObj.subtract(4, 2);

            //Assert
            expect(subtractTwoNumbers).toBe(2);
        });

        test('check subtract two numbers', ()=>{
            //Act
            let subtractTwoNumbers = calculatorObj.subtract(100, 2);

            //Assert
            expect(subtractTwoNumbers).toBe(98);
        });
    })

    describe('check divide functionality', ()=>{
        test('divide by two numbers', ()=>{
            //Act
            let divideTwoNumbers = calculatorObj.divide(4, 2);

            //Assert
            expect(divideTwoNumbers).toBe(2);
        });

        test('divide by two numbers', ()=>{
            //Act
            let divideTwoNumbers = calculatorObj.divide(1, 2);

            //Assert
            expect(divideTwoNumbers).toBe(0.5);
        });

        test('divide by two numbers', ()=>{
            //Act
            let divideTwoNumbers = calculatorObj.divide(100, 2);

            //Assert
            expect(divideTwoNumbers).toBe(50);
        });
    });

    describe('check multiply functionality', ()=>{
        test('multiply two numbers', ()=>{
            //Act
            let multiplyTwoNumbers = calculatorObj.multiply(11, 2);

            //Assert
            expect(multiplyTwoNumbers).toBe(22);
        });

        test('multiply two numbers', ()=>{
            //Act
            let multiplyTwoNumbers = calculatorObj.multiply(4, -2);

            //Assert
            expect(multiplyTwoNumbers).toBe(-8);
        });

        test('multiply two numbers', ()=>{
            //Act
            let multiplyTwoNumbers = calculatorObj.multiply(-3, -2);

            //Assert
            expect(multiplyTwoNumbers).toBe(6);
        });
    });
});

test('capitalize first character of a string', ()=>{
    //Act
    let capitalizeString = capitalize('paul');

    //Assert
    expect(capitalizeString).toBe('Paul');
});