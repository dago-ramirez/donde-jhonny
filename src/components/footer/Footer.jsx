import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const ICON_FACEBOOK = <FontAwesomeIcon icon={faFacebookSquare} />;
const ICON_TWITTER = <FontAwesomeIcon icon={faTwitterSquare} />;
const ICON_INSTAGRAM = <FontAwesomeIcon icon={faInstagramSquare} />;

export default function Footer() {
    return (
        <div className="h-32 bg-green-jhonny text-center hidden md:flex flex-row items-center justify-around" >
            <div className="flex flex-col items-start" >
                <h1 className="text-lg text-white font-bold underline" >Corporativo</h1>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Misión</a>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Visión</a>
                <a href="/" className="text-sm text-white hover:text-gray-400" >Nuestro Municipio</a>
            </div>
            <div className="flex flex-col items-start" >
                <h1 className="text-lg text-white font-bold underline" >Donde Jhonny</h1>
                <h1 className="text-sm text-white" >Cel: 315 202 9674</h1>
                <h1 className="text-sm text-white" >Correo: donde-jhonny@correo.com</h1>
                <h1 className="text-sm text-white" >El Águila Valle | © 2020</h1>
            </div>
            <div className="flex flex-col items-start" >
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
