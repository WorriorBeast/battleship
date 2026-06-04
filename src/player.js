import { gameBoard } from './gameboard';

function player() {
	const createPlayer = (name, type) => {
		const normalizedType = type.toLowerCase();

		if (normalizedType !== 'real' && normalizedType !== 'computer') {
			throw new Error("Invalid player type. Choose 'real' or 'computer'.");
		}

		const game = gameBoard();
		const board = game.board;

		return {
			name,
			type: normalizedType,
			board,
		};
	};

	return { createPlayer };
}

export { player };
