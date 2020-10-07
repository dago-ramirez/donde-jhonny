import React from 'react';
import logo from '../../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons';

const ICON_USER = <FontAwesomeIcon icon={faUserSecret} />;
const ICON_HAMBURGER = <FontAwesomeIcon icon={faHamburger} />;
const ICON_CLOSE = <FontAwesomeIcon icon={faTimes} />;

export default function Header() {
    return (
        <>
            <div className="bg-green-jhonny py-3 hidden md:flex flex-row items-center justify-around" >
                <nav className="flex flex-wrap items-center">
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Inicio
                    </a>
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Menú
                    </a>
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Pedido
                    </a>
                </nav>
                <img src={logo} alt="logo" className="w-20 md:w-24 lg:w-40 rounded-lg" />
                <nav className="flex flex-wrap items-center">
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Sugerencias
                    </a>
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Contacto
                    </a>
                    <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg font-bold cursor-pointer mx-1 transition duration-700">
                        Login
                    </a>
                </nav>
                <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-xl font-bold cursor-pointer transition duration-700 hidden" >{ICON_USER}</a>
            </div>
            <div className="bg-green-jhonny py-3 flex flex-row md:hidden items-center justify-around" >
                <img src={logo} alt="logo" className="w-12 sm:w-20 rounded-lg" />
                <h1 className="text-white font-bold text-3xl sm:text-3xl" >Donde Jhonny</h1>
                <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg sm:text-xl font-bold cursor-pointer transition duration-700" >{ICON_HAMBURGER}</a>
                <a href="/" className="text-white hover:text-green-jhonny hover:bg-white px-3 py-1 border-2 rounded-lg border-white hover:border-red-jhonny text-lg sm:text-xl font-bold cursor-pointer transition duration-700 hidden" >{ICON_CLOSE}</a>
            </div>
        </>
    )
}
