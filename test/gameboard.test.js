import { gameBoard } from '../src/gameboard';

describe('gameboard', () => {
	const game = gameBoard();

	test('checks if board has 10 rows', () => {
		expect(game.board).toHaveLength(10);
	});

	test('checks if board has 10 columns', () => {
		game.board.forEach((row) => {
			expect(row).toHaveLength(10);
		});
	});

	test('Ship is successfully placed', () => {
		expect(game.placeShip([3, 3], 3, true)).toBeTruthy();
		expect(game.placeShip([5, 5], 4, true)).toBeTruthy();
		expect(game.placeShip([0, 0], 3, false)).toBeTruthy();
		expect(game.placeShip([9, 0], 4, false)).toBeTruthy();
	});

	test('Ship is not successfully placed', () => {
		expect(game.placeShip([3, 3], 4, false)).toBeFalsy();
		expect(game.placeShip([5, 5], 4, false)).toBeFalsy();
		expect(game.placeShip([-1, 1], 4, false)).toBeFalsy();
		expect(game.placeShip([11, 5], 4, false)).toBeFalsy();
	});

	test('Check if ship is hit', () => {
		expect(game.receiveAttack([3, 3])).toBeTruthy();
		expect(game.receiveAttack([5, 3])).toBeTruthy();
		expect(game.receiveAttack([3, 5])).toBeFalsy();
		expect(game.receiveAttack([1, 1])).toBeFalsy();
	});

	test('Returns true or false if all ships are sunk', () => {
		const gameTwo = gameBoard();

		gameTwo.placeShip([0, 0], 1, true);
		gameTwo.placeShip([3, 2], 2, true);
		gameTwo.placeShip([5, 6], 3, false);

		gameTwo.receiveAttack([0, 0]);
		gameTwo.receiveAttack([3, 2]);
		gameTwo.receiveAttack([4, 2]);
		gameTwo.receiveAttack([5, 6]);
		gameTwo.receiveAttack([5, 7]);
		gameTwo.receiveAttack([5, 8]);

		expect(gameTwo.isFleetSunk()).toBeTruthy();
	});
});
