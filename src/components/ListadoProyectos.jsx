import BotonDemo from './BotonDemo';
import BotonGithub from './BotonGithub';

const ListadoProyectos = () => {
	return (
		<div className="bg-white px-8 lg:px-16 pt-16 pb-40">
			<h2 id="proyectos" className="text-center text-4xl font-black mb-12">
				Algunos De Mis <span className="text-indigo-600">Proyectos</span>
			</h2>

			<div className="grid grid-cols-1 justify-center">
				<div
					className="flex flex-col lg:flex-row gap-7 items-center  py-12 px-8 shadow-xl bg-[rgb(232, 232, 232)]"
					data-aos="zoom-out-left"
					data-aos-duration="1000"
				>
					<img
						src="/assets/img/quioscoapp.png"
						width={550}
						height={650}
						className="lg:w-2/5"
						alt="Preview QuioscoApp"
					/>

					<div className="lg:w-3/5">
						<h2 className="font-bold text-center lg:text-left text-2xl">
							App para cafetería que le permite al cliente realizar su
							pedido
						</h2>
						<div className="flex flex-col lg:flex-row items-center gap-5 text-xl my-5">
							Tecnologías empleadas:
							<div className="flex flex-wrap justify-center items-center gap-5">
								<img
									src="/assets/img/nextjs.png"
									width={30}
									height={30}
									alt="Icono NextJS"
								/>
								<img
									src="/assets/img/js.png"
									width={30}
									height={30}
									alt="Icono JavaScript"
								/>
								<img
									src="/assets/img/tailwind-css.svg"
									width={30}
									height={30}
									alt="Icono Tailwind-CSS"
								/>
								<img
									src="/assets/img/postgresql.png"
									width={30}
									height={30}
									alt="Icono PostgreSQL"
								/>
								<img
									src="/assets/img/prisma.svg"
									width={90}
									height={90}
									alt="Icono Prisma"
								/>
								<img
									src="/assets/img/railway.png"
									width={40}
									height={40}
									alt="Icono Railway"
								/>
							</div>
						</div>
						<p className="text-center lg:text-justify">
							Aplicación web que permite a los usuarios de una cafetería
							realizar el pedido con los productos que se muestran en la
							interfaz. <br />
							Dicha interfaz es amigable e intuitiva al posibilitar la
							visualización de elementos como: los productos disponibles,
							el costo de cada uno de estos, el subtotal de cada producto
							que se ordena y el costo total del pedido que se realizará.
						</p>
						<div className="flex flex-col md:flex-row items-center gap-5 mt-6  justify-center lg:justify-start">
							<BotonGithub
								ruta={
									'https://github.com/JoseAguilar-01/quioscoApp-postgreSQL'
								}
							/>

							<BotonDemo ruta={'https://quioscoapp-virid.vercel.app/'} />
						</div>
					</div>
				</div>
				<div
					className="flex flex-col lg:flex-row gap-7 items-center py-12 px-8 mt-5 shadow-xl bg-[rgb(232, 232, 232)]"
					data-aos="zoom-out-right"
					data-aos-duration="1000"
				>
					<img
						src="/assets/img/guitarLA-Next.png"
						width={550}
						height={650}
						className="lg:w-2/5"
						alt="Preview GuitarLA"
					/>

					<div className="lg:w-3/5">
						<h2 className="font-bold text-center lg:text-left text-2xl">
							Ecommerce de guitarras
						</h2>
						<div className="flex flex-col lg:flex-row items-center gap-5 text-xl my-5">
							Tecnologías empleadas:
							<div className="flex flex-wrap justify-center items-center gap-5">
								<img
									src="/assets/img/nextjs.png"
									width={30}
									height={30}
									alt="Icono NextJS"
								/>
								<img
									src="/assets/img/js.png"
									width={30}
									height={30}
									alt="Icono JavaScript"
								/>
							</div>
						</div>
						<p className="text-center lg:text-justify">
							Tienda de guitarras en línea que destaca, en su header, la
							guitarra que se encuentra en promoción. <br />
							El website permite ver el catálogo de guitarras en venta, el
							pedido a realizar, el total del precio del pedido, etc.
							<br /> Al poseer una interfaz intuitiva, invita a los
							usuarios a seguir explorando.
						</p>
						<div className="flex flex-col md:flex-row items-center gap-5 mt-6 justify-center lg:justify-start">
							<BotonGithub
								ruta={'https://github.com/JoseAguilar-01/GuitarLA-Next'}
							/>

							<BotonDemo
								ruta={'https://guitarla-next-gamma.vercel.app/'}
							/>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col lg:flex-row gap-7 items-center py-12 px-8 mt-5 shadow-xl bg-[rgb(232, 232, 232)]"
					data-aos="zoom-out-left"
					data-aos-duration="1000"
				>
					<img
						src="/assets/img/guitarLA-Strapi.png"
						width={550}
						height={650}
						className="lg:w-2/5"
						alt="Preview GuitarLA-Strapi"
					/>

					<div className="lg:w-3/5">
						<h2 className="font-bold text-center lg:text-left text-2xl">
							Ecommerce de guitarras (Backend)
						</h2>
						<div className="flex flex-col lg:flex-row items-center gap-5 text-xl my-5">
							Tecnologías empleadas:
							<div className="flex flex-wrap justify-center items-center gap-5">
								<img
									src="/assets/img/strapi.png"
									width={110}
									height={110}
									alt="Icono Strapi"
								/>
								<img
									src="/assets/img/cloudinary.png"
									width={120}
									height={120}
									alt="Icono Cloudinary"
								/>
							</div>
						</div>
						<p className="text-center lg:text-justify">
							Backend del Ecommerce de Guitarras.
						</p>
						<div className="flex flex-col md:flex-row items-center gap-5 mt-6 justify-center lg:justify-start">
							<BotonGithub
								ruta={'https://github.com/JoseAguilar-01/GuitarLA_Strapi'}
							/>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col lg:flex-row gap-7 items-center py-12 px-8 mt-5 shadow-xl bg-[rgb(232, 232, 232)]"
					data-aos="zoom-out-right"
					data-aos-duration="1000"
				>
					<img
						src="/assets/img/control-gastos.png"
						width={550}
						height={650}
						className="lg:w-2/5"
						alt="Preview Control-Gastos"
					/>

					<div className="lg:w-3/5">
						<h2 className="font-bold text-center lg:text-left text-2xl">
							App de control de gastos
						</h2>
						<div className="flex flex-col lg:flex-row items-center gap-5 text-xl my-5">
							Tecnologías empleadas:
							<div className="flex flex-wrap justify-center items-center gap-5">
								<img
									src="/assets/img/react.svg"
									width={30}
									height={30}
									alt="Icono React"
								/>
								<img
									src="/assets/img/js.png"
									width={30}
									height={30}
									alt="Icono JavaScript"
								/>
							</div>
						</div>
						<p className="text-center lg:text-justify">
							Aplicación que le permite a cualquier usuario establecer un
							presupuesto y agregar los gastos que realice en su día a día.{' '}
							<br />
							Mientras tanto se puede observar el porcentaje del
							presupuesto que ya se ha utilizado, los gastos sumados y el
							total restante luego de deducir gastos. <br />
							Es posible editar o eliminar gastos al deslizarlos a la
							izquierda o derecha, según sea el caso.
						</p>
						<div className="flex flex-col md:flex-row items-center gap-5 mt-6 justify-center lg:justify-start">
							<BotonGithub
								ruta={
									'https://github.com/JoseAguilar-01/control-presupuesto'
								}
							/>

							<BotonDemo
								ruta={'https://cosmic-cactus-7dd891.netlify.app/'}
							/>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col lg:flex-row gap-7 mt-5 items-center py-12 px-8 shadow-xl bg-[rgb(232, 232, 232)]"
					data-aos="zoom-out-left"
					data-aos-duration="1000"
				>
					<img
						src="/assets/img/citas-pacientes.png"
						width={550}
						height={650}
						className="lg:w-2/5"
						alt="Preview Citas-Pacientes"
					/>

					<div className="lg:w-3/5">
						<h2 className="font-bold text-center lg:text-left text-2xl">
							App para el control de citas veterinarias
						</h2>
						<div className="flex flex-col lg:flex-row items-center gap-5 text-xl my-5">
							Tecnologías empleadas:
							<div className="flex flex-wrap justify-center items-center gap-5">
								<img
									src="/assets/img/react.svg"
									width={30}
									height={30}
									alt="Icono React"
								/>
								<img
									src="/assets/img/js.png"
									width={30}
									height={30}
									alt="Icono JavaScript"
								/>
								<img
									src="/assets/img/tailwind-css.svg"
									width={30}
									height={30}
									alt="Icono TailwindCSS"
								/>
							</div>
						</div>
						<p className="text-center lg:text-justify">
							Aplicación que le permite al usuario recopilar los datos de
							pacientes veterinarios y visualizar la lista de los que ya se
							encuentran agregados. <br />
							Asimismo, el usuario tiene la posibilidad de editar los datos
							de cualquier paciente o darlo de alta, es decir, eliminarlo
							de la lista.
						</p>
						<div className="flex flex-col md:flex-row items-center gap-5 mt-6 justify-center lg:justify-start">
							<BotonGithub
								ruta={'https://github.com/JoseAguilar-01/citas_react'}
							/>

							<BotonDemo
								ruta={'https://dulcet-torte-74a0a1.netlify.app/'}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListadoProyectos;
