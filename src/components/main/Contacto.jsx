import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ICON_WA = <FontAwesomeIcon icon={faWhatsapp} className="text-green-jhonny" />
const ICON_MOBIL = <FontAwesomeIcon icon={faMobileAlt} className="text-green-jhonny" />
const ICON_MAIL = <FontAwesomeIcon icon={faEnvelope} className="text-green-jhonny" />

export default function Contacto() {
    return (
        <div className="contacto w-full sm:w-4/6 flex flex-col items-center my-16 border-8 border-green-jhonny rounded-lg" >
            <h1 className="text-2xl md:text-4xl text-red-jhonny font-bold underline my-10 text-center" >Contáctanos en</h1>
            <p className="text-xl sm:text-2xl text-red-jhonny mb-5 text-center" >{ICON_WA} 315 202 9674</p>
            <p className="text-xl sm:text-2xl text-red-jhonny mb-10 text-center" >{ICON_MAIL} donde-jhonny@correo.com</p>
        </div>
    )
}
