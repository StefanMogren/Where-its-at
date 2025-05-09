function Date({ when, shorten }) {
	// Delar upp dagen och månaden i två värden
	let dateArray = when.split(' ');

	const [date, month] = dateArray;

	// Omvandlar datumet till ett värde som dateTime-attributet i <time>-elementet godtar.
	const fullDate = () => {
		const yearNumber = '2025-';

		// Gör om månaden till ett strängnummer
		const monthToNumber = {
			Januari: '01-',
			Februari: '02-',
			Mars: '03-',
			April: '04-',
			Maj: '05-',
			Juni: '06-',
			Juli: '07-',
			Augusti: '08-',
			September: '09-',
			Oktober: '10-',
			November: '11-',
			December: '12-',
		};

		return `${yearNumber + monthToNumber[month] + date.padStart(2, '0')}`;
	};

	return (
		<time dateTime={fullDate()}>
			<span>{date}</span>{' '}
			{/* --- Om shorten är sann, förkortar månaden till tre bokstäver --- */}
			<span>{shorten ? month.slice(0, 3) : month}</span>
		</time>
	);
}

export default Date;
