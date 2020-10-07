import React from 'react';
import pizza1 from '../../images/pizza-1.jpg';
import pizza2 from '../../images/pizza-2.jpg';
import pizza3 from '../../images/pizza-3.jpg';
import pizza4 from '../../images/pizza-4.jpg';
import pizza5 from '../../images/pizza-5.jpg';
import PizzaGallery from './PizzaGallery';

const PRODUCTOS = [ {'id': 1, 'pizza': pizza1, 'precio': 20000},
                    {'id': 2, 'pizza': pizza2, 'precio': 25000}, 
                    {'id': 3, 'pizza': pizza3, 'precio': 30000},
                    {'id': 4, 'pizza': pizza4, 'precio': 35000},
                    {'id': 5, 'pizza': pizza5, 'precio': 40000}
                  ]

export default function MainContainer() {
    return (
        <div className="h-full main-container overflow-y-scroll" >
            <PizzaGallery productos={PRODUCTOS} />
        </div>
    )
}
