import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login.js';
import Layout from './components/Layout/Layout.js';
import { getTokenFromResponse } from './spotify';
import './App.scss';
import SpotifyWebApi from "spotify-web-api-js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { useDataLayer } from './provider/useDataLayer';

library.add(fas, fab, far);


//instancia de la libreria de spotify
let spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [, dispatch] = useDataLayer();
  
  //obtengo el token de acceso
  useEffect(() => { 
    
    setToken(getTokenFromResponse());

    window.location.hash = '';
  }, [])

  
  useEffect(() => {

    //al tener el token de acceso lo seteo yobtengo la data de la api que necesito
    if(token){

      spotify.setAccessToken(token);
      
      const getSpotifyData = async () => {
        
        const myData = await spotify.getMe()
        dispatch({
          type: "SET_USER",
          user: myData,
        });
          
        const myPlaylist = await spotify.getUserPlaylists()
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: myPlaylist,
        });
          
        const getMyTopTracks = await spotify.getMyTopTracks({limit: 4})
        dispatch({
          type: "SET_TOP_TRACKS",
          top_tracks: getMyTopTracks,
        });
         

        const getMyRecentlyPlayedTracks = await spotify.getMyRecentlyPlayedTracks({limit: 4})
        dispatch({
          type: "SET_RECENTLY_PLAYED",
          recently_played: getMyRecentlyPlayedTracks,
        });
 

        const getMyTopArtists = await spotify.getMyTopArtists({limit: 4})
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: getMyTopArtists,
        });

        await dispatch({
          type: "SET_SPOTIFY",
          spotifyData: spotify,
        })
          
        await dispatch({
          type: "SET_DATA",
          gettingData: true,
        })
      }

      getSpotifyData();  
    }
  }, [token, dispatch]);

  //si token es valido ingresa al programa y sino vuelve al componente login
  return (
    
      <div className="App">
        {token ? <Layout  token = { token } /> : <Login />}
      </div>
  );
}

export default App;
