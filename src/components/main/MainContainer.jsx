import React from 'react';
import pizza1 from '../../images/pizza-1.jpg';
import pizza2 from '../../images/pizza-2.jpg';
import pizza3 from '../../images/pizza-3.jpg';
import pizza4 from '../../images/pizza-4.jpg';
import pizza5 from '../../images/pizza-5.jpg';
import Inicio from './Inicio';
import Menu from './Menu';

const PRODUCTOS = [ 
                    {
                        'id': 1, 
                        'nombre': 'Nombre del producto', 
                        'descripcion': 'En esta parte va la descripción de la pizza o el producto que se está ofreciendo. Sus ingredientes y todo lo relacionado.', 
                        'imagen': pizza1, 
                        'porciones': [
                                        {'personal': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'mediana': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'grande': {'cantidad': 'X porciones', 'precio': '00.000'}}
                                     ]
                    },
                    {
                        'id': 2, 
                        'nombre': 'Nombre del producto', 
                        'descripcion': 'En esta parte va la descripción de la pizza o el producto que se está ofreciendo. Sus ingredientes y todo lo relacionado.', 
                        'imagen': pizza2, 
                        'porciones': [
                                        {'personal': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'mediana': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'grande': {'cantidad': 'X porciones', 'precio': '00.000'}}
                                     ]
                    }, 
                    {
                        'id': 3, 
                        'nombre': 'Nombre del producto', 
                        'descripcion': 'En esta parte va la descripción de la pizza o el producto que se está ofreciendo. Sus ingredientes y todo lo relacionado.', 
                        'imagen': pizza3, 
                        'porciones': [
                                        {'personal': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'mediana': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'grande': {'cantidad': 'X porciones', 'precio': '00.000'}}
                                     ]
                    },
                    {
                        'id': 4, 
                        'nombre': 'Nombre del producto', 
                        'descripcion': 'En esta parte va la descripción de la pizza o el producto que se está ofreciendo. Sus ingredientes y todo lo relacionado.', 
                        'imagen': pizza4, 
                        'porciones': [
                                        {'personal': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'mediana': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'grande': {'cantidad': 'X porciones', 'precio': '00.000'}}
                                      ]
                    },
                    {
                        'id': 5, 
                        'nombre': 'Nombre del producto', 
                        'descripcion': 'En esta parte va la descripción de la pizza o el producto que se está ofreciendo. Sus ingredientes y todo lo relacionado.', 
                        'imagen': pizza5, 
                        'porciones': [
                                        {'personal': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'mediana': {'cantidad': 'X porciones', 'precio': '00.000'}}, 
                                        {'grande': {'cantidad': 'X porciones', 'precio': '00.000'}}
                                      ]
                    }
                  ]

export default function MainContainer() {
    return (
        <div className="h-full main-container" >
            {/* <Inicio productos={PRODUCTOS} /> */}
            <Menu productos={PRODUCTOS} />
        </div>
    )
}
