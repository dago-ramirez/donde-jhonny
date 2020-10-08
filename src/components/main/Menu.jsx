import React from 'react'

export default function Menu({ productos }) {
    // Se recorren el arreglo de productos y se devuelve una tarjeta con su información
    const MENU = productos.map(item => {
        // Se recorre el arreglo porciones y se devuelve cada producto con su precio
        const PRECIOS = item.porciones.map(elemento => {
            for (let key in elemento) {
                return <div key={key} className="flex flex-col sm:flex-row mb-3" >
                            <div className="flex flex-wrap" >
                                <h3 className="text-lg text-red-jhonny font-bold mr-1" >{key}:</h3>
                                <p className="text-lg text-red-jhonny mr-1" >{elemento[key]['cantidad']}</p>
                            </div>
                            <div className="flex flex-wrap" >
                                <h3 className="text-lg text-red-jhonny font-bold mr-1" >Valor:</h3>
                                <p className="text-lg text-red-jhonny mr-1" >${elemento[key]['precio']}</p>
                            </div>
                        </div>
            }
            return null;
        });
        return <div key={item.id} className="w-full sm:w-4/6 my-4 border-8 border-green-jhonny rounded-lg bg-green-100">
                    <img src={item.imagen} alt="pizza" />
                    <div className="m-5
                    " >
                        <h1 className="text-2xl text-red-jhonny font-bold underline mb-3" >{item.nombre}</h1>
                        <p className="text-lg text-red-jhonny mb-3" >{item.descripcion}</p>
                        {PRECIOS}
                    </div>
                </div>
    });
    return (
        <div className="flex flex-col items-center justify-center" >
            {MENU}
        </div>
    )
}
