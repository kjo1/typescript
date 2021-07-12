{
	/* 	// JavaScript 💩
	function jsAdd(num1, num2) {
		return num1 + num2;
	}

	// TypeScript ✨
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	// JavaScript 💩
	function jsFetchNum(id) {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}
	// TypeScript ✨
	function fetchNum(id: string): Promise<number> {
		// code ...
		// code ...
		// code ...
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	} */

	// JavaScript ✨ => TypeScript
	// optional parameter
	// 1.
	function printName(firstName: string, lastName?: string) {
		// 2. function printName(firstName: string, lastName: string | undefined) {
		// * don't do #2(the above) way because you have to give undefined value every time is undefined alway do as #1 when it's optional parameter
		// function printName(firstName: string, lastName: string = 'Unknown') {
		console.log(firstName);
		console.log(lastName); // undefined
	}
	printName('Steve', 'Jobs');
	printName('Sonsy');
	printName('Anna');

	// Default parameter
	function printMessage(message: string = 'default message') {
		console.log(message);
	}
	printMessage();

	// Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
		console.log(numbers);
	}

	console.log(addNumbers(1, 2));
	console.log(addNumbers(1, 2, 3, 4));
	console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
