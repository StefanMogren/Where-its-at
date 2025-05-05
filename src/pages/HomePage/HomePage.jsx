import './homePage.css';
import logo from '../../assets/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
	return (
		<section className='wrapper'>
			<main className='home-page'>
				{/* --- Loggan --- */}
				<img
					className='home-page__img'
					src={logo}
					alt="Logga Where it's at"
				/>

				{/* --- Titel --- */}
				<h1 className='home-page__title'>Where It's @</h1>
				<h2 className='home-page__subtitle'>Ticketing made easy</h2>

				{/* --- Instruktion att swipa --- */}
				<p className='home-page__instructions'>
					Swipe to the right to begin
				</p>

				{/* Kanske ska animera denna
				<FontAwesomeIcon icon={faFingerprint} /> */}
			</main>
		</section>
	);
}

export default HomePage;
