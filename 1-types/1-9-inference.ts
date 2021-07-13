{
	/**
	 * Type Inference
	 */
	// * if a type is too obvious, the type might not need to be decalred especially primitive type like the below but, for functions declare types would be better and preferred since functions can get very complex
	let text = 'hello';
	function print(message = 'hello') {
		console.log(message);
	}
	print('hello');

	function add(x: number, y: number): number {
		return x + y;
	}
	const result = add(1, 2);
}
