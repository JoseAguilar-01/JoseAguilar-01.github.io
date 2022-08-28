import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Header from './components/Header';
import ListadoProyectos from './components/ListadoProyectos';
import ListadoHabilidades from './components/ListadoHabilidades';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Spinner from './components/Spinner';

function App() {
	const [loadSpinner, setLoadSpinner] = useState(true);

	setTimeout(() => {
		setLoadSpinner(false);
		AOS.init();
	}, 1500);

	return loadSpinner === true ? (
		<Spinner />
	) : (
		<div>
			<ParticlesBackground />

			<Navbar />

			<Header />

			<div className="bg-white separador-superior__1 mt-24"></div>

			<ListadoProyectos />

			<ListadoHabilidades />

			<div className="bg-white separador-inferior__1"></div>

			<Contacto />

			<Footer />
		</div>
	);
}

export default App;
