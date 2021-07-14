/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

function calculate(operator: string, num1: number, num2: number): number {
	let result = 0;

	if (operator === 'add') {
		result = num1 + num2;
	} else if (operator === 'substract') {
		result = num1 - num2;
	} else if (operator === 'multiply') {
		result = num1 * num2;
	} else if (operator === 'divide') {
		result = num1 / num2;
	} else if (operator === 'remainder') {
		result = num1 % num2;
	}

	return result;
}
