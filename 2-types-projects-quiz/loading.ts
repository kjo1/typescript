{
	/**
	 * Print Loading State
	 */
	type LoadingState = {
		state: 'loading';
	};

	type SuccessState = {
		state: 'success';
		response: {
			body: string;
		};
	};

	type FailState = {
		state: 'fail';
		reason: string;
	};

	type ResourceLoadState = LoadingState | SuccessState | FailState;

	printLoginState({ state: 'loading' }); // 👀 loading...
	printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
	printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

	function printLoginState(result: ResourceLoadState) {
		if ('response' in result) {
			console.log(`😃 ${result.response.body}`);
		} else if ('reason' in result) {
			console.log(`😱 ${result.reason}`);
		} else {
			console.log(`👀 loading...`);
		}
	}
}
