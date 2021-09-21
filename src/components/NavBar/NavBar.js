import React, { useState } from 'react'
import {MenuItems} from './MenuItem'
import './NavBar.css';

export const NavBar = ({setCategories}) => {

    const [counter, setCounter] = useState(0);
    const [state, setState] = useState(false);

    /* ----------------------------------- */
    const limpiarHistorial = () => {
        setCategories([]);
        setCounter(0);
    }

    const randomGift = () => {
        var category = 'Random ' + counter.toString()
        setCategories( cats => [category, ...cats] );
        setCounter( (c) => c + 1  );
    }

    const action = (action) => {

        switch (action) {
            case 1:
                limpiarHistorial();
                break;
            case 2:
                randomGift();
                break;
/*             case 3:
                console.log('Acerca De');                
                break;
            case 4:
                console.log('Contacto');
                break; */
            default:         
                break;
        }
        
    }

    return (

        <nav className="NavbarItems">

            <h1 className="navbar-logo">CrazyGifts <i className="fab fa-react"></i></h1>

            <div className="menu-icon" onClick={() =>{setState(!state);}}>
                <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={state ? 'nav-menu active' : 'nav-menu'}>

                {
                    MenuItems.map( (item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} onClick={() => {action(item.action)}}> 
                                    {item.title} 
                                </a>
                            </li>
                        )
                    } )
                }
            </ul>
        </nav>
        
        
    )
 
}

