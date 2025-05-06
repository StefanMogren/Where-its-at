import randLargeLetter from './randLargeLetter';
import randNumber from './randNumber';

const generateTicketID = () => {
	let ticketID = '#';
	for (let i = 0; i < 5; i++) {
		const letterOrNumber = Math.random();
		console.log(letterOrNumber);

		if (letterOrNumber > 0.5) {
			ticketID += randLargeLetter();
		} else {
			ticketID += randNumber();
		}
	}
	return ticketID;
};

export default generateTicketID;
