import React,{useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setSeries}) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setSeries(e=>[inputValue, ...e])
            setInputValue("")
        }

        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="serie">
                <input type="text" 
                name="serie" 
                placeholder="Ingresa una serie"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
            </label>
        </form>
    )
}

AddCategory.propTypes = {
    setSeries: PropTypes.func.isRequired
}

export default AddCategory
