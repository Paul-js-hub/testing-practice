let calculator = {
    add(x, y){
        return x + y;
    },

    subtract(x, y){
        return x - y;
    },

    divide(x, y){
        return x / y;
    },

    multiply(x, y){
        return x * y;
    }
}

module.exports = calculator;

// let calculatorObj = Object.create(calculator);

// console.log(calculatorObj.multiply(1, 2));
