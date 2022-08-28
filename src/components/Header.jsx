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

				<a href="#proyectos">
					<button className="flex items-center gap-2 uppercase text-indigo-600 hover:text-white font-bold py-3 px-5 bg-transparent hover:bg-indigo-700 transition-colors duration-150 rounded border-solid border-2 border-indigo-600 hover:border-indigo-700 cursor-pointer hvr-grow">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
							alt="Icono Code"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							/>
						</svg>
						Ver Proyectos
					</button>
				</a>
			</div>
		</header>
	);
};

export default Header;
