import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDataLayer } from '../../provider/useDataLayer';
import './SideBar.scss';
import { Link } from 'react-router-dom'



function SideBar(){

    const [{ playlists }] = useDataLayer();
    
    return (
        <div className= "side-bar">
            <div className= "side-bar-options">
                <div className= "spotify-logo">
                    <FontAwesomeIcon icon={['fab', 'spotify']} size= "3x"/>
                    <h1 className= "spotify-title">Ferretify</h1>
                </div>
                <Link className= "option-title" to= "/">
                    <FontAwesomeIcon icon={['fas', 'home']} />
                    <p>Inicio</p>
                </Link>
                <Link className= "option-title" to= "/">
                    <FontAwesomeIcon icon={['fas', 'search']} />
                    <p className= "option-title">Buscar</p>
                </Link>
                <Link className= "option-title" to= "/">
                    <FontAwesomeIcon icon={['fas', 'headphones']} />
                    <p className= "option-title" >Tu Biblioteca</p>
                </Link>
            </div>
            <p className= "playlist-title">PLAYLISTS</p>
            
            <div className= "playlists">
                {
                    playlists?.items?.map(
                        (list, index) => 
                        <Link className="playlists-option" key= {index} to= {`/playlist/${list.id}`}>
                            <p>{list.name}</p>
                        </Link>
                    ) 
                }
            </div>
        </div>
    )
}

export default SideBar;
