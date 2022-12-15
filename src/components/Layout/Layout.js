import React from 'react';
import "./Layout.scss";
import SideBar from "../SideBar/SideBar.js";
import Body from "../Body/Body.js";
import { useDataLayer } from '../../provider/useDataLayer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaylistSection from '../PlaylistSection/PlaylistSection';
import Player from '../Player/Player';
import SearchContainer from '../SearchContainer/SearchContainer';
import {PlayerContext} from '../Context/PlayerContext'
import LibraryContainer from '../LibrayContainer/LibraryContainer';
import Loader from '../Loader/Loader';

function Layout({ token }) {

  const [{ gettingData }] = useDataLayer();
  
  return (
  <div className= "player-container">
    {
      gettingData
      ?
      <PlayerContext >
        <BrowserRouter>
          <div className= "player_body">
            <SideBar />
            <Routes>
              <Route index path="/" element = {<Body />} />
              <Route index path="/search" element = {<SearchContainer />} />
              <Route index path="/library" element = {<LibraryContainer />} />
              <Route index path="/playlist/:playlistId" element = {<PlaylistSection />} />
            </Routes>
          </div>
          <Player token = { token } />
        </BrowserRouter>
      </PlayerContext>
      :  
      <Loader />
    }
  </div>
  )
}

export default Layout;