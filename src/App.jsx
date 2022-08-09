import React from 'react';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Header from './components/Header';
import ListadoProyectos from './components/ListadoProyectos';
import ListadoHabilidades from './components/ListadoHabilidades';
import Navbar from './components/Navbar';
import Particle from './components/Particle';

function App() {
	return (
		<div>
			<Particle />

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
