import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const ICON_FACEBOOK = <FontAwesomeIcon icon={faFacebookSquare} />;
const ICON_TWITTER = <FontAwesomeIcon icon={faTwitterSquare} />;
const ICON_INSTAGRAM = <FontAwesomeIcon icon={faInstagramSquare} />;

export default function Footer() {
    return (
        <div className="bg-green-jhonny text-center flex flex-col md:flex-row items-start md:items-center justify-around py-2" >
            <div className="flex flex-col items-start ml-5 md:ml-0" >
                <h1 className="text-lg text-white font-bold underline" >Corporativo</h1>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Misión</a>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Visión</a>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Nuestro Municipio</a>
            </div>
            <div className="flex flex-col items-start my-3 md:my-0  ml-5 md:ml-0" >
                <h1 className="text-lg text-white font-bold underline" >Donde Jhonny</h1>
                <h1 className="text-sm text-white" >Cel: 315 202 9674</h1>
                <h1 className="text-sm text-white" >Correo: donde-jhonny@correo.com</h1>
                <h1 className="text-sm text-white" >El Águila Valle | © 2020</h1>
            </div>
            <div className="flex flex-col items-start ml-5 md:ml-0" >
                <h1 className="text-lg text-white font-bold underline" >Síguenos en</h1>
                <div className="flex flex-row items-start justify-between">
                    <a href="/" className="text-3xl text-white hover:text-gray-400" >{ICON_FACEBOOK}</a>
                    <a href="/" className="text-3xl text-white hover:text-gray-400 mx-4" >{ICON_TWITTER}</a>
                    <a href="/" className="text-3xl text-white hover:text-gray-400" >{ICON_INSTAGRAM}</a>
                </div>
            </div>
        </div>
    )
}
