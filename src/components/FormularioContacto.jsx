import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormularioContacto = () => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [correo, setCorreo] = useState('');
	const [mensaje, setMensaje] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_l7eqox6',
				'template_zlau0yz',
				e.target,
				'yrqPUeI7XjQnRhzuF'
			)
			.then(
				(result) => {},
				(error) => {
					console.log(error.text);
				}
			);

		handleResetFormulario();
		toast.success('Envío Exitoso!');
	};

	const handleResetFormulario = () => {
		setNombre('');
		setApellido('');
		setCorreo('');
		setMensaje('');
	};

	return (
		<div className="px-8 md:px-16 pb-16 mt-40" id="formulario">
			<div
				className="mt-12 md:mx-20 lg:mx-36 xl:mx-60 border-solid border-2 border-gray-100 shadow-gray-300 shadow-xl"
				data-aos="flip-up"
				data-aos-duration="1000"
			>
				<h2 className="py-8 px-8 md:px-0 text-center text-4xl font-black">
					Envíame un <span className="text-indigo-600">email</span>
				</h2>

				<ToastContainer
					position="top-right"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<form className="pb-8 px-8" onSubmit={sendEmail}>
					<div className="flex flex-col text-left gap-2">
						<label htmlFor="nombre" className="font-bold text-lg">
							Nombre
						</label>
						<input
							type="text"
							value={nombre}
							onChange={(e) => setNombre(e.target.value)}
							minLength={3}
							id="nombre"
							name="nombre"
							placeholder="Ej. José"
							className="p-2 border-solid border-2
							 border-gray-300 rounded"
						/>
					</div>
					<div className="flex flex-col text-left gap-2 pt-6">
						<label htmlFor="nombre" className="font-bold text-lg">
							Apellido
						</label>
						<input
							type="text"
							value={apellido}
							onChange={(e) => setApellido(e.target.value)}
							minLength={3}
							id="apellido"
							name="apellido"
							placeholder="Ej. Aguilar"
							className="p-2 border-solid border-2
							 border-gray-300 rounded"
						/>
					</div>
					<div className="flex flex-col text-left gap-2 py-6">
						<label htmlFor="correo" className="font-bold text-lg">
							Email
						</label>
						<input
							type="email"
							value={correo}
							onChange={(e) => setCorreo(e.target.value)}
							required={true}
							id="correo"
							name="correo"
							placeholder="Ej. miCorreo@correo.com"
							className="p-2 border-solid border-2
							 border-gray-300 rounded"
						/>
					</div>
					<div className="flex flex-col text-left gap-2">
						<label htmlFor="mensaje" className="font-bold text-lg">
							Mensaje
						</label>
						<textarea
							id="mensaje"
							value={mensaje}
							onChange={(e) => setMensaje(e.target.value)}
							required={true}
							name="mensaje"
							placeholder="Ej. Hola José, cómo estás?
							Tengo una propuesta para ti..."
							className="p-2 border-solid border-2
							 border-gray-300 rounded"
						/>
					</div>

					<input
						type="submit"
						value="Enviar Mensaje"
						className="uppercase mt-8 p-3 bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors rounded text-white text-center font-black w-full"
					/>
				</form>
			</div>
		</div>
	);
};

export default FormularioContacto;
