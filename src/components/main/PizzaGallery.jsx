import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ICON_LEFT = <FontAwesomeIcon icon={faChevronLeft} />;
const ICON_RIGHT = <FontAwesomeIcon icon={faChevronRight} />;

export default function PizzaGallery({productos}) {
    const PIZZAS = productos.map(item => <img src={item.pizza} alt="Pizza" key={item.id} className="mb-5 border-8 border-green-jhonny rounded-lg" />)
    
    return (
        <div className="w-4/6 my-4 mx-auto" >
            <a href="/" className="text-6xl text-red-jhonny animate-pulse icon-left" >{ICON_LEFT}</a>
            <a href="/" className="text-6xl text-red-jhonny animate-pulse icon-right" >{ICON_RIGHT}</a>
            {PIZZAS}
        </div>
    )
}
