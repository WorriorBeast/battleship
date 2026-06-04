import { player } from '../src/player';

describe('player', () => {
	const BOARD_SIZE = 10;
	const board = Array.from({ length: BOARD_SIZE }, () =>
		Array(BOARD_SIZE).fill(null),
	);

	test('Create real player', () => {
		const realPlayer = player();
		expect(realPlayer.createPlayer('Jose', 'REAL')).toEqual({
			name: 'Jose',
			type: 'real',
			board,
		});
	});

	test('Create computer player', () => {
		const cpu = player();
		expect(cpu.createPlayer('Computer', 'COMPUTER')).toEqual({
			name: 'Computer',
			type: 'computer',
			board,
		});
	});
});
