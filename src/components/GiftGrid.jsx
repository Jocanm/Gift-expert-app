import React,{ useState,useEffect } from 'react'
import GiftGridItem from './GiftGridItem'

const GiftGrid = ({category}) => {

    const [images,setImages] = useState([])

    useEffect(()=>{
        getGifs()
    },[])

    const getGifs = async () =>{

        const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=aPTPePBFtm4BE0ipqr9J2kI5HEPsXU8R"

        const respuesta = await fetch( url );
        const {data} = await respuesta.json()
        const gifs = data.map(img=>{
            return {
                id:img.id,
                title:img.title,
                url: img.images?.downsized.url
            }
        })
        console.log(gifs)
        setImages(gifs)

    }

    return (
        <div>
            <h3> {category} </h3>
            {
                images.map(e=>(
                    <GiftGridItem key={e.id} {...e}/>
                ))
            }
        </div>
    )
}

export default GiftGrid
