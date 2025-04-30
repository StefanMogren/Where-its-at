import './timeFromTo.css';

function TimeFromTo({ from, to }) {
	// Fixar så tiderna inuti dateTime-attributet använder kolon (:) samt att tiderna som visas använder punkt (.)
	return (
		<>
			<time dateTime={from.replace('.', ':')}>
				{from.replace(':', '.')}
			</time>
			{' - '}
			<time dateTime={to.replace('.', ':')}>{to.replace(':', '.')}</time>
		</>
	);
}

export default TimeFromTo;
