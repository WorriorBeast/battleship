import { ship } from './ship';

function gameBoard() {
	const BOARD_SIZE = 10;
	const board = Array.from({ length: BOARD_SIZE }, () =>
		Array(BOARD_SIZE).fill(null),
	);
	const placedShips = [];
	const missedAttacks = new Set();

	const placeShip = (coordinate, length, isHorizontal) => {
		const [x, y] = coordinate;
		const placedCoord = [];

		for (let i = 0; i < length; i++) {
			const currentX = x + (isHorizontal ? i : 0);
			const currentY = y + (!isHorizontal ? i : 0);

			if (
				currentX >= BOARD_SIZE ||
				currentY >= BOARD_SIZE ||
				currentX < 0 ||
				currentY < 0
			) {
				return false;
			}

			if (board[currentX][currentY] !== null) {
				return false;
			}

			placedCoord.push([currentX, currentY]);
		}

		const newShip = ship(length);

		placedCoord.forEach(([x, y]) => {
			board[x][y] = newShip;
		});

		placedShips.push(newShip);

		return true;
	};

	const receiveAttack = (coordinate) => {
		const [x, y] = coordinate;

		if (board[x][y] === null) {
			missedAttacks.add([x, y]);

			return false;
		}

		board[x][y].hit();

		return true;
	};

	return { placeShip, receiveAttack, board };
}

export { gameBoard };
