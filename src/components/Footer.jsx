const Footer = () => {
	return (
		<div className="bg-indigo-600 p-5">
			<div className="flex justify-center items-center gap-10 pb-5">
				<a href="https://github.com/JoseAguilar-01" target="_blank">
					<img
						loading="lazy"
						src="/assets/img/github-icon.svg"
						width={45}
						height={45}
						alt="Icono Github"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/jos%C3%A9-gregorio-aguilar-d-vicente-b83876240/"
					target="_blank"
				>
					<img
						loading="lazy"
						src="/assets/img/linkedin-icon.svg"
						width={40}
						height={40}
						alt="Icono Linkedin"
					/>
				</a>
				<a
					href="../../public/assets/doc/José_Aguilar_CV.pdf"
					download="CV_Jose_Aguilar"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="#fff"
						className="w-11 h-11"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				</a>
			</div>

			<p className="font-bold text-lg text-center tracking-[.15em] text-white">
				Hecho con &#10084;&#65039;&#8205;&#128293; (pasión) y
				&#128104;&#8205;&#128187; (código).
			</p>
		</div>
	);
};

export default Footer;
