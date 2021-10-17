import React from 'react'

const GiftGridItem = ({title,url}) => {

    // console.log({id,title,url})

    return (
        <div className="card shadow-xl p-0">
            <img src= {url} alt={title} />
            <p className="bg-gray-400">{ title }</p>
        </div>
    )
}

export default GiftGridItem
