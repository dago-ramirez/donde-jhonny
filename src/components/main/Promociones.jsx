import React from 'react'

export default function Promociones({ promociones }) {
    console.log(promociones)
    const PROMOS = promociones.map(promo => {
        return <div key={promo.promocion} className="w-full sm:w-4/6 my-4 mx-auto relative" >
                    <img src={promo.imagen} alt="pizza" className="rounded-lg relative" />
                    <div className="promo relative mx-5 md:mx-20" >
                        <h1 className="text-xl md:text-2xl text-red-jhonny font-bold m-2" >{promo.descripcion}</h1>
                        <p className="text-lg md:text-xl text-red-jhonny font-bold m-2" >${promo.precio}</p>
                    </div>
               </div>
    });
    return (
        <div>
            {PROMOS}
        </div>
    )
}
