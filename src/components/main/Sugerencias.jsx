import React from 'react';
import logo from '../../images/logo.jpg';

export default function Sugerencias() {
    return (
        <form className="contacto w-full sm:w-4/6 flex flex-col items-center my-16 border-8 border-green-jhonny rounded-lg shadow-lg" >
            <div className="flex flex-col sm:flex-row px-2 sm:px-10 my-5" >
                {/* <img src={logo} alt="logo"/> */}
                <p className="text-xl text-red-jhonny" >Gracias por tomarse el tiempo para dejar sus comentarios o sugerencias. Su opinión es muy importante para nosotros.</p>
            </div>
            <div className="mb-4 w-full px-2 sm:px-10">
                <label className="block text-red-jhonny text-lg font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <textarea className="shadow appearance-none border border-green-jhonny rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nombre" />
            </div>
            <div className="mb-4 w-full px-2 sm:px-10">
                <label className="block text-red-jhonny text-lg font-bold mb-2" htmlFor="suggestion">
                    Comentario o sugerencia
                </label>
                <textarea className="shadow appearance-none border border-green-jhonny rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" id="suggestion" placeholder="Comentario o sugerencia" />
            </div>
            <div className="mb-4 w-full px-2 sm:px-10 text-center">
                <input type="submit" className="bg-green-jhonny px-5 py-2 text-white text-lg font-bold border-2 border-green-100 rounded-lg hover:bg-white hover:text-green-jhonny hover:border-green-jhonny transition duration-700" value="Enviar"></input>
            </div>
        </form>
    )
}
