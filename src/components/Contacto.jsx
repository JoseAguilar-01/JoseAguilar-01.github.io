import FormularioContacto from './FormularioContacto';

const Contacto = () => {
	return (
		<div className="bg-white ">
			<div className="div-relleno">
				<h2
					id="contacto"
					className="text-center text-4xl font-black pt-32"
				>
					Contáctame
				</h2>
			</div>

			<div className="grid px-16 pb-20  md:grid-cols-3 items-center gap-10 md:gap-5">
				<div className="flex flex-col justify-center items-center gap-2 p-5 shadow-gray-300 shadow-lg h-52">
					<img
						loading="lazy"
						src="/assets/img/correo.svg"
						width={65}
						height={65}
						alt="Icono Correo"
					/>
					<div className="text-center font-bold text-lg">
						<p>Email</p>
						<a
							href="mailto:aguilarjg406@gmail.com"
							className="text-indigo-600 hover:text-indigo-700 transition-colors"
						>
							aguilarjg406@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-2 p-5 shadow-gray-300 shadow-lg h-52">
					<img
						loading="lazy"
						src="/assets/img/linkedin.svg"
						width={65}
						height={65}
						alt="Icono Linkedin"
					/>
					<div className="text-center font-bold text-lg">
						<p>Linkedin</p>
						<a
							href="https://www.linkedin.com/in/jos%C3%A9-gregorio-aguilar-d-vicente-b83876240/"
							target="_blank"
							className="text-indigo-600 hover:text-indigo-700 transition-colors"
						>
							José Gregorio Aguilar D'Vicente
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-2 p-5 shadow-gray-300 shadow-lg h-52">
					<img
						loading="lazy"
						src="/assets/img/github.svg"
						width={65}
						height={65}
						alt="Icono Github"
					/>
					<div className="text-center font-bold text-lg">
						<p>Github</p>
						<a
							href="https://github.com/JoseAguilar-01"
							target="_blank"
							className="text-indigo-600 hover:text-indigo-700 transition-colors"
						>
							JoseAguilar-01
						</a>
					</div>
				</div>
			</div>

			<FormularioContacto />
		</div>
	);
};

export default Contacto;
