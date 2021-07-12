{
	/**
	 * Type Aliases
	 */
	type Text = string;
	const name: Text = 'ellie';
	const address: Text = 'canada';
	type Num = number;
	// ? object type
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: 'dog',
		age: 12,
	};

	/**
	 * String Literal Types
	 */
	type Name = 'name';
	let sonsyName: Name;
	sonsyName = 'name';
	type JSON = 'json';
	const json: JSON = 'json';

	type Bool = true;
	// const isCat: Bool = false; // only true can be declared
}
