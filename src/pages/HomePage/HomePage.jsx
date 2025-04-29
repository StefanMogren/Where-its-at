import './homePage.css';
import logo from '../../assets/logo.png';

function HomePage() {
	return (
		<main className='home-page'>
			<img
				className='home-page__img'
				src={logo}
				alt="Logga Where it's at"
			/>
			<h1 className='home-page__title'>Where It's @</h1>
			<h2 className='home-page__subtitle'>Ticketing made easy</h2>
		</main>
	);
}

export default HomePage;
