import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'
import { nanoid } from 'nanoid'
import './app.css'
import 'animate.css';

const GiftExpertApp = () => {

    const [series, setSeries] = useState(["Mugiwara"])

    return (
        <div>
            <h2 className="text-2xl font-bold py-4">GiftExpertApp</h2>
            <AddCategory setSeries={setSeries}/>
            <hr className="bg-red-700"/>
            <ol className="mt-4">
                {
                    series.map(e=>(
                        <GiftGrid 
                        key={nanoid()}
                        category={e}/>
                    ))
                }
            </ol>
        </div>
    )
}

export default GiftExpertApp
