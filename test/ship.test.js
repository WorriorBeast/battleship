import { ship } from '../src/ship';

describe('ship', () => {
	const destroyer = ship(3);

	test('checks if hit registered', () => {
		expect(destroyer.hit()).toBe(1);
	});

	test('Destroyer should still be afloat after one hit', () => {
		expect(destroyer.isSunk()).toBe(false);
	});

	test('Destroyer should be sunk after three hits', () => {
		destroyer.hit();
		destroyer.hit();

		expect(destroyer.isSunk()).toBe(true);
	});
});
