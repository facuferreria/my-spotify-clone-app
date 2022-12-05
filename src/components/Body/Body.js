import React from 'react'
import './Body.scss'
import { useDataLayer } from "../../provider/useDataLayer.js";
import MusicSections from "../MusicSections/MusicSections.js";



function Body() {

    //obtengo las propiedades de la data necesaria que quiero mostrar en este componente con useDataLayer
    const [{  recently_played,  top_tracks, top_artists }] = useDataLayer();
   
    return (
        <div className= "main-body">
            <MusicSections data = {recently_played} category = {"recently_played"} />
            <MusicSections data = {top_tracks} category = {"top_tracks"} />    
            <MusicSections data = {top_artists} category = {"top_artists"} />          
        </div>
    )
}

export default Body
