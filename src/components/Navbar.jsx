import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Inicio', href: '#inicio', current: false },
	{ name: 'Proyectos', href: '#proyectos', current: false },
	{ name: 'Habilidades', href: '#habilidades', current: false },
	{ name: 'Contacto', href: '#contacto', current: false },
];

const Navbar = () => {
	return (
		<Disclosure
			as="nav"
			className="bg-indigo-700 fixed w-screen z-20"
			data-aos="fade-down"
			data-aos-duration="1000"
			data-aos-delay="2000"
		>
			{({ open }) => (
				<Fragment>
					<div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all">
									{/* Open main menu */}
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								{/*Icono o Logo aquí*/}

								<div className="hidden sm:block sm:ml-3">
									<div className="flex gap-3 space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="text-white bg-indigo-500 hover:text-indigo-600 hover:bg-white transition-colors
													px-3 py-2 rounded-md text-lg font-semibold"
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center gap-3">
								<a
									href="https://drive.google.com/file/d/1iUWoKHb81c1OmmfqQTDYNurtgdkCmo2x/view?usp=sharing"
									target="_blank"
								>
									<button>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="#fff"
											className="w-9 h-9"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
											/>
										</svg>
									</button>
								</a>
								<a href="#formulario">
									<button
										type="button"
										className="bg-transparent p-1 rounded-full hover:bg-indigo-500 transition-colors"
									>
										<img
											loading="lazy"
											src="/assets/img/correo-icon.svg"
											alt="Icono Correo"
											width={45}
											heigth={45}
										/>
									</button>
								</a>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className="text-white bg-indigo-500 hover:text-indigo-600 hover:bg-white  transition-all text-center block px-3 py-2 rounded-md text-base font-bold"
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</Fragment>
			)}
		</Disclosure>
	);
};

export default Navbar;
