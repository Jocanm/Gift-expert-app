import GiftGridItem from './GiftGridItem'
import { nanoid } from 'nanoid'
import useFetchGifs from '../hooks/useFetchGifs'
import ReactLoading from 'react-loading';


const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const {data,loading} = useFetchGifs( category );

    

    return (
        <>
            <h3 className="font-bold text-2xl py-6"> {category} </h3>

            { loading? 
            (<div className="flex items-center justify-center">
                <ReactLoading type={"spin"} color={"#000000"} height={"7%"} width={"7%"} />
            </div>):
            (<div className="card-grid">
            {
                data.map(e => (
                    // Esto siginfica que le pasamos como propiedades al componente todos los llave-valor del objeto que estamos iterando con el .map()
                    <GiftGridItem key={nanoid()} {...e} />
                ))
            }
            </div>)
            }
        </>
    )
}

export default GiftGrid
