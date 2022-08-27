const BotonGithub = ({ ruta }) => {
	return (
		<a href={ruta} target="_blank">
			<button className="flex items-center text-xs gap-2 uppercase text-white font-bold py-2 px-3 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 rounded cursor-pointer border-solid border-2 border-indigo-600 hover:border-indigo-700 hvr-grow">
				<img
					loading="lazy"
					src="/assets/img/github-icon.svg"
					width={18}
					height={18}
					alt="Icono Github"
				/>
				Github
			</button>
		</a>
	);
};

export default BotonGithub;
