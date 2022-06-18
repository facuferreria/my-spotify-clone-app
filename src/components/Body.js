import React from 'react'
import '../styles/Body.scss'
import { useDataLayer } from "./Hooks/useDataLayer.js";
import MusicSections from "./MusicSections.js";



function Body({ spotify }) {

    //obtengo las propiedades de la data necesaria que quiero mostrar en este componente con useDataLayer
    const [{  recently_played,  top_tracks, top_artists }, dispatch] = useDataLayer();
   
    return (
        <div className= "main-body">
            {/*
                <MusicSections 
                    recently_played = {recently_played}
                    top_tracks = {top_tracks}
                    top_artists = {top_artists}
                />
            */}
        </div>
    )
}

export default Body
