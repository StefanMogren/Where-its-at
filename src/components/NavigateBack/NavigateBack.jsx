import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './navigateBack.css';

function NavigateBack() {
	const navigate = useNavigate();

	return (
		// --- Vänsterpil, navigera bakåt i historiken ---
		<button className='navigate-btn' onClick={() => navigate(-1)}>
			<FontAwesomeIcon
				icon={faArrowLeft}
				className='navigate-btn__icon'
			/>
		</button>
	);
}

export default NavigateBack;
