import { useState, useMemo } from "react";

function ExpensiveCalculations({ number }){

    const computeFactorial = (num) => {

        console.log('Calculating factorial....');

        if(num <= 1) return 1; 

        return num * computeFactorial(num - 1);

    } 

    const factorial  = useMemo(() => computeFactorial(number), [number]);

    return <h2>Factorial of {number} {factorial}</h2>

}
export default ExpensiveCalculations; 