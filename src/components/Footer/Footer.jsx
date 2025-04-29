import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

// library.add(faCircle);
// const test = window.FontAwesome.icon({ prefix: 'fas', iconName: 'circle' });

// Ska innehålla de tre punkterna för swiper
function Footer() {
	return (
		<footer className='footer'>
			<FontAwesomeIcon
				icon={faCircle}
				size='2xs'
				style={{ color: '#ffffff' }}
			/>
			<FontAwesomeIcon
				icon={faCircle}
				size='2xs'
				style={{ color: '#FFFFFF4D' }}
			/>
			<FontAwesomeIcon
				icon={faCircle}
				size='2xs'
				style={{ color: '#FFFFFF4D' }}
			/>
		</footer>
	);
}

export default Footer;
