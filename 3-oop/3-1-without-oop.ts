{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	const BEANS_GRAM_PER_SHOT: number = 7;

	let coffeeBeans: number = 0;
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
			throw new Error('Not enough coffee beans!');
		}
		coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
		return {
			shots,
			hasMilk: false,
		};
	}

	coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
	const coffee = makeCoffee(2);
	console.log(coffee);
}

/* tried on my own
	let coffeeBean = '';

	function makeCoffee(shot: number) {
		let result = '';
		console.log('Your order is being made.');

		setTimeout(() => {
			console.log(`coffee with ${shot} shot(s)`);
		}, 2000);
	}

	// oneShots, twoShots

	makeCoffee(2);
*/
