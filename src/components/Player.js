import React from 'react';
import "../styles/Player.scss";
import SideBar from "./SideBar.js";
import Body from "./Body.js";
import { useDataLayer } from './Hooks/useDataLayer.js';

function Player({spotify}) {

  const [{ user, recently_played, top_artists, top_tracks, playlists, gettingData }, dispatch] = useDataLayer();
  return (
  
  <div className= "player-container">
    <div className= "player_body">
        <SideBar  spotify= {spotify} />
        <Body  spotify= {spotify} />   
    </div>
  </div>

  )
}

export default Player;