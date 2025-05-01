import './button.css';
import useEventStore from '../../stores/useEventStore';

function Button({ amount, id, children }) {
	const { events, addEventAmount } = useEventStore();

	const addToBasket = () => {
		addEventAmount(id, amount);
		console.log(events);
	};

	return (
		<button className='button' onClick={() => addToBasket()}>
			{children}
		</button>
	);
}

export default Button;
