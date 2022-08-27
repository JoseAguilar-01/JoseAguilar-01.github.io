const BotonDemo = ({ ruta }) => {
	return (
		<a href={ruta} target="_blank">
			<button className="flex items-center gap-2 text-xs uppercase text-indigo-600 hover:text-white font-bold py-2 px-3 bg-transparent hover:bg-indigo-600 transition-colors duration-150 rounded border-solid border-2 border-indigo-600 hover:border-indigo-700 cursor-pointer hvr-grow">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Demo
			</button>
		</a>
	);
};

export default BotonDemo;
