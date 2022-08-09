import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'Proyectos', href: '#proyectos', current: false },
	{ name: 'Habilidades', href: '#habilidades', current: false },
	{ name: 'Contacto', href: '#contacto', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	return (
		<Disclosure as="nav" className="bg-indigo-700 fixed w-full z-20">
			{({ open }) => (
				<Fragment>
					<div className="max-w-7xl mx-auto px-2 py-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all">
									<span className="sr-only">Open main menu</span>
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
												className={classNames(
													'text-white bg-indigo-500 hover:text-indigo-600 hover:bg-white transition-colors',
													'px-3 py-2 rounded-md text-lg font-semibold'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center ">
								<a href="#formulario">
									<button
										type="button"
										className="bg-transparent p-1 rounded-full hover:bg-indigo-500 transition-colors"
									>
										<img
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
									className={classNames(
										'text-white bg-indigo-500 hover:text-indigo-600 hover:bg-white transition-colors text-center',
										'block px-3 py-2 rounded-md text-base font-bold transition-colors'
									)}
									aria-current={item.current ? 'page' : undefined}
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
