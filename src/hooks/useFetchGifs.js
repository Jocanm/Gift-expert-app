import React, { useState } from 'react'

const useFetchGifs = () => {
    
    const [state, setState] = useState({
        data:[],
        loading:true
    })

    setTimeout(() => {
        
        setState({
            data:[],
            loading:false
        })

    }, 3000);

    return state
}

export default useFetchGifs
