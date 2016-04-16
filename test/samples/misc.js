module.exports = [
	{
		description: 'handles empty return',
		input: `
			function foo () {
				return;
			}`,
		output: `
			function foo () {
				return;
			}`
	},

	{
		description: 'allows break statement inside switch',

		input: `
			switch ( foo ) {
				case bar:
				console.log( 'bar' );
				break;

				default:
				console.log( 'default' );
			}`,

		output: `
			switch ( foo ) {
				case bar:
				console.log( 'bar' );
				break;

				default:
				console.log( 'default' );
			}`
	},

	{
		description: 'double var is okay',

		input: `
			function foo () {
				var x = 1;
				var x = 2;
			}`,

		output: `
			function foo () {
				var x = 1;
				var x = 2;
			}`
	}
];
