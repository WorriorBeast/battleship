function ship(size) {
	const length = size;
	let hits = 0;

	const hit = () => {
		return ++hits;
	};

	const isSunk = () => {
		return length === hits ? true : false;
	};

	return { hit, isSunk };
}

export { ship };
