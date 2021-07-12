{
	// Array
	const fruits: string[] = ['🍅', '🍌'];
	const scores: Array<number> = [1, 3, 4];
	function printArray(fruits: readonly string[]) {
		// function printArray(fruits: readonly Array<string>) { //* can't use this way when using readonly
	}

	// Tuple -> interface, type alias, class
	// Don't recommend to use it when it can be replaced by interface, type alias or class
	let student: [string, number];
	student = ['name', 123];
	student[0]; // name
	student[1]; // 123
	// ? object destructuring
	const [name, age] = student;
}
