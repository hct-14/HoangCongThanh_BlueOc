function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) return NaN; // Nếu mảng có ít hơn 2 phần tử, trả về NaN

    let max1 = -Infinity; // Số lớn nhất
    let max2 = -Infinity; // Số lớn thứ hai

    // Duyệt qua mảng và tìm ra hai số lớn nhất
    arr.forEach(num => {
        if (num > max1) {
            max2 = max1; // max2 nhận giá trị cũ của max1
            max1 = num;  // max1 nhận giá trị mới
        } else if (num > max2) {
            max2 = num;  // max2 nhận giá trị mới nếu num lớn hơn max2 nhưng nhỏ hơn max1
        }
    });

    return max1 + max2; // Trả về tổng của hai số lớn nhất
}

// Mảng test cases
const testCases = [
    { input: [1, 4, 2, 3, 5], expected: 9 },  // Hai số lớn nhất là 5 và 4, tổng là 9
    { input: [10, 20, 30, 40, 50], expected: 90 },  // Hai số lớn nhất là 50 và 40, tổng là 90
    { input: [7, 8, 2, 5, 6], expected: 15 },  // Hai số lớn nhất là 8 và 7, tổng là 15
    { input: [100, 50, 25], expected: 150 },  // Hai số lớn nhất là 100 và 50, tổng là 150
    { input: [1, 1, 1, 1], expected: 2 },  // Hai số lớn nhất là 1 và 1, tổng là 2
    { input: [5, 3, 1], expected: 8 },  // Hai số lớn nhất là 5 và 3, tổng là 8
    { input: [5], expected: NaN },  // Chỉ có một số, không thể tính tổng hai số lớn nhất
    { input: [], expected: NaN },  // Mảng rỗng, không có số nào để tính
];

// Kiểm thử tất cả các test case
testCases.forEach((testCase, index) => {
    const result = sumOfTopTwoIntegers(testCase.input);
    console.log(`Test case ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(testCase.input)}`);
    console.log(`Expected: ${testCase.expected}`);
    console.log(`Result: ${result}`);
    console.log(result === testCase.expected ? 'PASS' : 'FAIL');
    console.log('------');
});
