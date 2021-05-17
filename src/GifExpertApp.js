import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['One Punch']);
    

    return (
        <div>
            <h2 className="titleGnrl">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr className="sepG"/>

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
