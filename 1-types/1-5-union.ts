{
	/**
	 * Union Types: OR
	 * When only one can be declared among given types
	 */
	type Direction = 'left' | 'right' | 'up' | 'down';
	function move(direction: Direction) {
		console.log(direction);
	}
	move('down');

	type TileSize = 8 | 16 | 32;
	const tile: TileSize = 16;

	type SuccessState = {
		response: {
			body: string;
		};
	};
	type FailState = {
		reason: string;
	};

	type LoginState = SuccessState | FailState;

	function login(): LoginState {
		return {
			response: {
				body: 'logged in!',
			},
		};
	}

	// printLoginState(state: LoginState)
	// success -> 🎉 body
	// fail -> 😭 reason
}
