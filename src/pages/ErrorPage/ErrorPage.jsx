import React from 'react';
import './errorPage.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

function ErrorPage() {
	return (
		<section className='wrapper'>
			<main className='error-page'>
				<h1 className='error-page__title'>404</h1>
				<h2 className='error-page__subtitle'>
					Hoppsan! Den här sidan verkar inte existera
				</h2>
				<Link className='error-page__link' to={'/events'}>
					<Button>
						Klicka här för att gå tillbaka till eventssidan
					</Button>
				</Link>
			</main>
		</section>
	);
}

export default ErrorPage;
