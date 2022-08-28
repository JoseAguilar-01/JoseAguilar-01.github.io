const Header = () => {
	return (
		<header className="pb-32 pt-44" id="inicio">
			<h1 className="text-5xl md:text-6xl lg:text-8xl p-10 text-center font-black text-white uppercase z-10 text-flicker-in-glow sha">
				Hola, Soy <span className="italic text-indigo-600">José</span>
			</h1>

			<p className="text-gray-300 text-center text-xl md:text-2xl w-4/5 md:w-3/5 mx-auto">
				Soy un desarrollador Frontend en constante evolución, desarrollo y
				aprendizaje. Siempre dispuesto a prestarle ayuda a todo aquel que
				necesite, me gusta trabajar con personas que aportan valor y
				siempre dar el 200% de mi esfuerzo en cada proyecto que realizo o
				en el que colaboro.
			</p>

			<div className="flex flex-col md:flex-row items-center justify-center gap-7 mt-9">
				<a href="https://github.com/JoseAguilar-01" target="_blank">
					<button className="flex items-center gap-2 uppercase text-white font-bold py-3 px-5 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 rounded cursor-pointer border-solid border-2 border-indigo-600 hover:border-indigo-700 hvr-grow">
						<img
							loading="lazy"
							src="/assets/img/github-icon.svg"
							width={26}
							height={26}
							alt="Icono Github"
						/>
						Mi Github
					</button>
				</a>

				<a
					href="../../public/assets/doc/José_Aguilar_CV.pdf"
					download="CV_Jose_Aguilar"
				>
					<button className="flex items-center gap-2 uppercase text-white font-bold py-3 px-5 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 rounded cursor-pointer border-solid border-2 border-indigo-600 hover:border-indigo-700  hvr-grow__2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
						Descargar CV
					</button>
				</a>
			</div>
		</header>
	);
};

export default Header;
