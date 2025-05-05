function Date({ when, shorten }) {
	// Delar upp dagen och månaden i två värden
	let dateArray = when.split(' ');

	const [date, month] = dateArray;

	// Omvandlar datumet till ett värde som dateTime-attributet i <time>-elementet godtar.
	const fullDate = () => {
		const yearNumber = '2025-';

		// Gör om månaden till ett strängnummer
		let monthNumber;
		switch (month) {
			case 'Januari':
				monthNumber = '01-';
				break;

			case 'Februari':
				monthNumber = '02-';
				break;

			case 'Mars':
				monthNumber = '03-';
				break;

			case 'April':
				monthNumber = '04-';
				break;

			case 'Maj':
				monthNumber = '05-';
				break;

			case 'Juni':
				monthNumber = '06-';
				break;

			case 'Juli':
				monthNumber = '07-';
				break;

			case 'Augusti':
				monthNumber = '08-';
				break;

			case 'September':
				monthNumber = '09-';
				break;

			case 'Oktober':
				monthNumber = '10-';
				break;

			case 'November':
				monthNumber = '11-';
				break;

			case 'December':
				monthNumber = '12-';
				break;
		}

		return `${yearNumber + monthNumber + date.padStart(2, '0')}`;
	};

	return (
		<time dateTime={fullDate()}>
			<span>{date}</span>{' '}
			<span>{shorten ? month.slice(0, 3) : month}</span>
		</time>
	);
}

export default Date;
