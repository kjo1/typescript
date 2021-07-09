{
	/**
	 * ^ JavaScript
	 * Primitive: number, string, boolean, bigint, symbol, null, undefined
	 * Object: function, array.....
	 */

	// ^ TypeSCript
	const num: number = -6;

	// string
	const str: string = 'hello';

	// boolean
	const bool: boolean = false;

	// undefined
	let name: undefined; // 💩 Don't ever declare as undefined because we can only declare undefined afterwared
	let age: number | undefined; // ! use as an optional type
	age = undefined;
	age = 1;
	function find(): number | undefined {
		return undefined;
	}

	// * between undefined and null, undefined is used more

	// null
	let person: null; // 💩 The same goes for null as undefined
	let person2: string | null;
}
