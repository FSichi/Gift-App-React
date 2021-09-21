import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import {NavBar} from './components/NavBar/NavBar.js'


export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['One Punch']);

    
    return (
        <div>

            <NavBar setCategories={ setCategories } /> 

            <AddCategory setCategories={ setCategories } />
        
            <ol>
                { 
                    categories.map( categorie => (
                        <GifGrid 
                            key = {categorie}
                            category = {categorie} 
                        />
                    ))
                }

            </ol>

        </div>
    )
}
