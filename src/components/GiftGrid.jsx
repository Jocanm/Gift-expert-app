import React, { useState, useEffect } from 'react'
import GiftGridItem from './GiftGridItem'
import { nanoid } from 'nanoid'
import { getGifs } from '../helpers/apiGif.js'
import useFetchGifs from '../hooks/useFetchGifs'

const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const {data,loading} = useFetchGifs();

    // useEffect(() => {
    //     getGifs(category)
    //     .then(gifs => setImages(gifs))
    //     .catch((err)=>{console.log("error")})
    // }, [category])

    

    return (
        <>
            <h3 className="font-bold text-2xl py-6"> {category} </h3>

            { loading? "Cargando...":"Datos cargados" }

            {/* <div className="card-grid">
                {
                    images.map(e => (
                        // Esto siginfica que le pasamos como propiedades al componente todos los llave-valor del objeto que estamos iterando con el .map()
                        <GiftGridItem key={nanoid()} {...e} />
                    ))
                }
            </div> */}
        </>
    )
}

export default GiftGrid
