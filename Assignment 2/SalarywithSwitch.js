function findTax(salary) {
    let tax = 0;

    switch (true) {
        case salary <= 0:  // Handle invalid salaries first
            console.log("Invalid salary input");
            return;
        case salary > 0 && salary <= 500000:
            tax = 0; // 0% tax
            break;
        case salary > 500000 && salary <= 1000000:
            tax = salary * 0.10; // 10% tax
            break;
        case salary > 1000000 && salary <= 1500000:
            tax = salary * 0.20; // 20% tax
            break;
        case salary > 1500000:
            tax = salary * 0.30; // 30% tax
            break;
    }

    console.log(`Salary: ${salary}, Tax: ${tax}`);
}

// Example usage
findTax(400000);  
findTax(700000);  
findTax(1200000); 
findTax(1800000); 
findTax(-5000);
findTax(0); 