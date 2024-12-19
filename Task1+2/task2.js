function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) return NaN; 

    let max1 = -Infinity; 
    let max2 = -Infinity; 


    arr.forEach(num => {
        if (num > max1) {
            max2 = max1; 
            max1 = num; 
        } else if (num > max2) {
            max2 = num;  
        }
    });

    return max1 + max2; 
}

const testCases = [
    { input: [1, 4, 2, 3, 5], expected: 9 },  
 
];

testCases.forEach((testCase, index) => {
    const result = sumOfTopTwoIntegers(testCase.input);
    console.log('Test case ${index}:');
    console.log(`Input: ${testCase.input}`);
    console.log(`Expected: ${testCase.expected}`);
    console.log(`Result: ${result}`);
    console.log(result === testCase.expected ? 'PASS' : 'FAIL');
    console.log('------');
});
