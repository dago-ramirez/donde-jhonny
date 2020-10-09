import React from 'react';
import logo from '../../images/logo.jpg';

export default function Sugerencias() {
    return (
        <form className="contacto w-full sm:w-4/6 flex flex-col items-center my-16 border-8 border-green-jhonny rounded-lg shadow-lg" >
            <div className="flex flex-col sm:flex-row" >
                {/* <img src={logo} alt="logo"/> */}
                <p className="text-xl text-red-jhonny" >Gracias por tomarse el tiempo para dejar sus comentarios o sugerencias. Su opinión es muy importante para nosotros.</p>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
        </form>
    )
}
