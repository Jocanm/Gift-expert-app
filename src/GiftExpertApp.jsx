import React, {useState} from 'react'
import './app.css'
import AddCategory from './components/AddCategory'
import GiftGrid from './components/GiftGrid'

const GiftExpertApp = () => {

    const [series, setSeries] = useState(["One Punch"])

    return (
        <div>
            <h2 className="text-2xl font-bold py-4">GiftExpertApp</h2>
            <AddCategory setSeries={setSeries}/>
            <hr className="bg-red-700"/>
            <ol className="mt-4">
                {
                    series.map(e=>(
                        <GiftGrid 
                        key={e}
                        category={e}/>
                    ))
                }
            </ol>
        </div>
    )
}

export default GiftExpertApp
