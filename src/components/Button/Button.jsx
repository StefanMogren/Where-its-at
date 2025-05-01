import './button.css';
import useEventStore from '../../stores/useEventStore';

function Button({ amount, resetAmount, id, children }) {
	const { events, addEventAmount } = useEventStore();

	const addToBasket = () => {
		addEventAmount(id, amount);
		console.log(events);
		resetAmount(0);
	};

	return (
		<button className='button' onClick={() => addToBasket()}>
			{children}
		</button>
	);
}

export default Button;
