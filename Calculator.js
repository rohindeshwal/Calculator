function add(number) {
    if (number === 0) {
        return 0;
    }

    let delimiter = ",";
    let startIndex = 0;

    // Check for custom delimiter
    if (number.startsWith("//")) {
        const delimiterLineEnd = number.indexOf("\n");
        delimiter = number.slice(2, delimiterLineEnd)
        startIndex = delimiterLineEnd + 1;
        number = number.slice(startIndex);
    }

    const numbersArray = number.replace(/\n/g, delimiter).split(delimiter);

    let sum = 0;
    const negativeNumbers = [];

    for (let num of numbersArray) {
        const number = parseInt(num, 10);
        if (number < 0) {
            negativeNumbers.push(number);
        } else {
            sum += number;
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
    }

    return sum;
}

console.log("Result ----->", add(""));
console.log("Result ----->", add("1"));
console.log("Result ----->", add("1,5"));
console.log("Result ----->", add("1\n2,3"));
console.log("Result ----->", add("//;\n1;2"));

try {
    console.log(add("//;\n1;-2")); // Throws error: negative number not allowed -2
} catch (e) {
    console.log(e.message);
}

try {
    console.log(add("1,2,-3,-4")); // Throws error: negative number not allowed -3
} catch (e) {
    console.log(e.message);
}
