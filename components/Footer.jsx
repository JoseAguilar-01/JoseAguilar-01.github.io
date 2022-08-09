const Footer = () => {
	return (
		<div className="bg-indigo-600 p-5">
			<div className="flex justify-center items-center gap-10 pb-5">
				<a href="https://github.com/JoseAguilar-01" target="_blank">
					<img
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
						src="/assets/img/linkedin-icon.svg"
						width={40}
						height={40}
						alt="Icono Linkedin"
					/>
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
