{
	/**
	 * Enum
	 */
	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// TypeScript
	// * don't recommend use enum for TypeScript for web only the case need to be used is for mobile development
	// ! can use a union type instead
	type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // this is a union type

	enum Days {
		Monday = 1,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}
	console.log(Days.Monday);
	let day: Days = Days.Saturday;
	day = Days.Tuesday;
	day = 10;
	console.log(day);

	let dayOfWeek: DaysOfWeek = 'Monday';
	dayOfWeek = 'Wednesday';
}
