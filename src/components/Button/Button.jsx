import './button.css';

function Button({ onClick, children }) {
	return (
		<button
			className='button'
			onClick={() => console.log('Button is clicked!')}>
			{children}
		</button>
	);
}

export default Button;
