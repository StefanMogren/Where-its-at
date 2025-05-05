function Time({ time }) {
	// Fixar så tiderna inuti dateTime-attributet använder kolon (:) samt att tiderna som visas använder punkt (.)
	return (
		<time dateTime={time.replace('.', ':')}>{time.replace(':', '.')}</time>
	);
}

export default Time;
