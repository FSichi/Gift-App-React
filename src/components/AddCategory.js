import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }
    
    return (
        
        <form onSubmit={handleSubmit} className="formStyle">
            <h2 className="titleGnrl">Buscar Categoria
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
            <i class="fas fa-search-plus"></i>
            </h2>
        </form>   
    );
}


//SOLICITAR USO DE PROPS
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
