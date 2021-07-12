{
	/**
	 * ^ JavaScript
	 * Primitive: number, string, boolean, bigint, symbol, null, undefined
	 * Object: function, array.....
	 */

	// ^ TypeScript
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

	// unknown 💩 - don't know what type can be decalred
	// ! avoid using it - unknown type exists because TS has to be used with JS
	let notSure: unknown = 0; // you can declare any types
	notSure = 'he';
	notSure = true;

	// any 💩 - accept any types
	// ! avoid using it
	let anything: any = 0;
	anything = 'hello';

	// void - when a function returns nothing
	// if a type is not declared, the default is void
	function print(): void {
		console.log('hello');
		return;
	}
	let unusable: void = undefined; // 💩 never use this way because only undefined can be returned

	// never
	// ! usually use when an unexpected error occurs to log error message to server
	// ! because it doesn't return anything
	function throwError(message: string): never {
		// message -> server (log)
		throw new Error(message);
		while (true) {}
	}
	let neverEnding: never; // 💩

	// object
	// ! can also use as any time so avoid using
	let obj: object; //💩
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: 'sonsy' });
	acceptSomeObject({ animal: 'dog' });
}
