const ListadoHabilidades = () => {
	return (
		<div className="espaciado">
			<div className="bg-black w-full separador h-16"></div>

			<div className="bg-black text-white px-16 py-32 ">
				<h2
					id="habilidades"
					className="text-center text-4xl font-black mb-16"
				>
					Mis <span className="text-indigo-600"> Habilidades </span>
				</h2>

				<div
					className="mb-12"
					data-aos="fade-down"
					data-aos-duration="950"
				>
					<h3 className="text-center text-2xl font-black mb-12 text-indigo-500 uppercase">
						Blandas
					</h3>
					<div className="bg-black flex flex-wrap gap-5 justify-center items-baseline md:px-16 lg:px-20">
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/empatia.png"
								width={60}
								height={60}
								alt="Icono Empatía"
							/>
							<p> Empatía </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/inteligencia-emocional.png"
								width={60}
								height={60}
								alt="Icono Inteligencia Emocional"
							/>
							<p> Inteligencia Emocional </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/comunicacion.png"
								width={60}
								height={60}
								alt="Icono Comunicación"
							/>
							<p> Comunicación Efectiva </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4 text-center">
							<img
								loading="lazy"
								src="/assets/img/aprendizaje.png"
								width={60}
								height={60}
								alt="Icono Aprendizaje"
							/>
							<p>
								Aprendizaje Fluido y <br /> Continuo
							</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/cooperacion.png"
								width={60}
								height={60}
								alt="Icono Cooperación"
							/>
							<p> Cooperación </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/opinion.png"
								width={60}
								height={60}
								alt="Icono Aporte de ideas"
							/>
							<p> Aporte de Ideas </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4 text-center">
							<img
								loading="lazy"
								src="/assets/img/fortaleza.png"
								width={60}
								height={60}
								alt="Icono Tolerancia al Fracaso"
							/>
							<p>
								Tolerancia a Cometer <br /> Errores
							</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/motivacion.png"
								width={60}
								height={60}
								alt="Icono Motivación"
							/>
							<p> Motivación y Evolución </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/pasion.png"
								width={60}
								height={60}
								alt="Icono Pasión"
							/>
							<p> Pasión </p>
						</div>
					</div>
				</div>

				<div
					className="pb-20"
					data-aos="fade-down"
					data-aos-duration="950"
				>
					<h3 className="text-center text-2xl font-black mb-12 text-indigo-500 uppercase">
						Técnicas
					</h3>
					<div className="bg-black flex flex-wrap gap-5 justify-center items-baseline md:px-16 lg:px-20">
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/react.svg"
								width={60}
								height={60}
								alt="Icono React.js"
							/>
							<p> React.js </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/vite.svg"
								width={60}
								height={60}
								alt="Icono Vite"
							/>
							<p>Vite</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/js.png"
								width={60}
								height={60}
								alt="Icono JavaScript"
							/>
							<p> JavaScript </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/nextjs-2.svg"
								width={100}
								height={100}
								alt="Icono Next.js"
							/>
							<p> Next.js </p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/strapi-icon.svg"
								width={60}
								height={60}
								alt="Icono Strapi"
							/>
							<p>Strapi</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/prisma-icon.svg"
								width={50}
								height={50}
								alt="Icono Prisma ORM"
							/>
							<p>Prisma ORM</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/html5.png"
								width={70}
								height={70}
								alt="Icono HTML5"
							/>
							<p>HTML5</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/css3.png"
								width={70}
								height={70}
								alt="Icono CSS3"
							/>
							<p>CSS3</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/tailwind-css.svg"
								width={70}
								height={70}
								alt="Icono Tailwind CSS"
							/>
							<p>Tailwind CSS</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/bootstrap-icon.svg"
								width={65}
								height={65}
								alt="Icono Bootstrap"
							/>
							<p>Bootstrap</p>
						</div>
						<div className="flex flex-col justify-center items-center gap-3 px-4">
							<img
								loading="lazy"
								src="/assets/img/git.svg"
								width={60}
								height={60}
								alt="Icono Git"
							/>
							<p>Git</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListadoHabilidades;
