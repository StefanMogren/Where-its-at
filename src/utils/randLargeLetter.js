const randLargeLetter = () => {
	const letterIndex = Math.floor(Math.random() * 26) + 65;

	return String.fromCharCode(letterIndex);
};

export default randLargeLetter;
