import React from 'react';
import "./Layout.scss";
import SideBar from "../SideBar/SideBar.js";
import Body from "../Body/Body.js";
import { useDataLayer } from '../../provider/useDataLayer.js';

function Layout() {

  const [{ gettingData }] = useDataLayer();
  
  return (
  
  <div className= "player-container">
    {
    
    gettingData

    ?
    <div className= "player_body">
      <SideBar />
      <Body />   
    </div>
    :  
    <h3>Cargando...</h3>
  }
  </div>

  )
}

export default Layout;