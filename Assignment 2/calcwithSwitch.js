function calculate(num1, num2, operation) {
    switch (operation) {
        case "add":
            console.log(`Result: ${num1 + num2}`);
            break;
        case "subtract":
            console.log(`Result: ${num1 - num2}`);
            break;
        case "multiply":
            console.log(`Result: ${num1 * num2}`);
            break;
        case "divide":
            if (num2 === 0) {
                console.log("Error: Division by zero");
            } else {
                console.log(`Result: ${num1 / num2}`);
            }
            break;
        default:
            console.log("Invalid operation");
    }
}
calculate(5,6, "add");
calculate(3,4, "subtract");
calculate(5,4, "multiply");
calculate(3,4, "divide");