import React, { } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs( category);
    
    return (
        <>
            <h3 className="titleCat animate__animated animate__rubberBand">{category}</h3>
            <hr className="sep"/>

            {loading && <p className = "animate__animated animate__flash">Loading..</p>}

            <div className="cardGrid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
            <hr className="sep"/>
            
        </>
    )
}
