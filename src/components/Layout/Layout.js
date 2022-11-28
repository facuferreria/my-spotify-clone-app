import React from 'react';
import "./Layout.scss";
import SideBar from "../SideBar/SideBar.js";
import Body from "../Body/Body.js";
import { useDataLayer } from '../../provider/useDataLayer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaylistSection from '../PlaylistSection/PlaylistSection';
import Player from '../Player/Player';

function Layout({ token }) {

  const [{ gettingData }] = useDataLayer();
  return (
  
  <div className= "player-container">
    {
    
    gettingData

    ?
    <BrowserRouter>
      <div className= "player_body">
        <SideBar />
        <Routes>
          <Route index path="/" element = {<Body />} />
          <Route index path="/playlist/:playlistId" element = {<PlaylistSection />} />
        </Routes>
      </div>
      <Player token = { token } />
    </BrowserRouter>
    :  
    <h3>Cargando...</h3>
  }
  </div>

  )
}

export default Layout;