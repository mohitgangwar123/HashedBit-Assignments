function sumOfProducts(n1, n2) {
    let sum = 0;

    let str1 = n1.toString().split("").reverse();
    let str2 = n2.toString().split("").reverse();

   
    let minLength = Math.min(str1.length, str2.length);

    for (let i = 0; i < minLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]); // Multiply corresponding digits and add to sum
    }

    console.log(`Sum of products: ${sum}`);
}

// Example usage
sumOfProducts(6, 34);