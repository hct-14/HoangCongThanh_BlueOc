function mostFrequentStringLengths(strings) {
    const lengthCount = {};

    strings.forEach(str => {
        const length = str.length;
        lengthCount[length] = (lengthCount[length] || 0) + 1;
    });

    let maxCount = 0;
    for (let length in lengthCount) {
        maxCount = Math.max(maxCount, lengthCount[length]);
    }

    const result = strings.filter(str => str.length === Number(Object.keys(lengthCount).find(key => lengthCount[key] === maxCount)));
    
    return result;
}

const testCases = [
    { input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'], expected: ['ab', 'cd', 'gh'] },

];

testCases.forEach((testCase, index) => {
    const result = mostFrequentStringLengths(testCase.input);
    console.log('Test case :');
    console.log(`Input: ${testCase.input}`);
    console.log(`Expected: ${testCase.expected}`);
    console.log(`Result: ${result}`);
    console.log(result.toString() === testCase.expected.toString() ? 'PASS' : 'FAIL');
    console.log('------');
});
