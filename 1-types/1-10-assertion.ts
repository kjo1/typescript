{
	/**
	 * Type Assertions 💩
	 */
	// * Type Assertions are not typically good so try to not use too often
	function jsStrFunc(): any {
		return 2;
	}
	const result = jsStrFunc();
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1)); // 😱❌

	function findNumbers(): number[] | undefined {
		return undefined;
	}

	// * use ! when 100% sure there is a value
	const numbers = findNumbers();
	numbers!.push(2); // 😱❌

	/*
  const numbers = findNumbers()!;
	numbers.push(2); // 😱❌
   */

	const button = document.querySelector('class')!;
	// if (button) {
	// 	button.nodeValue;
	// }
}
