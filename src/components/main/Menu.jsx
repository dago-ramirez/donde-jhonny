import React from 'react'

export default function Menu({ productos }) {
    const MENU = productos.map(item => {
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
                    <div className="m-1" >
                        <h1 className="text-2xl text-red-jhonny font-bold underline mb-3" >{item.nombre}</h1>
                        <p className="text-lg text-red-jhonny mb-3" >{item.descripcion}</p>
                        <ul>
                            {PRECIOS}
                        </ul>
                    </div>
                </div>
    });
    return (
        <div className="flex flex-col items-center justify-center" >
            {MENU}
        </div>
    )
}
