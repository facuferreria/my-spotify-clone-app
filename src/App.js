import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login.js';
import Layout from './components/Layout/Layout.js';
import { getTokenFromResponse } from './spotify';
import './App.scss';
import SpotifyWebApi from "spotify-web-api-js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useDataLayer } from './provider/useDataLayer';

library.add(fas, fab);


//instancia de la libreria de spotify
let spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ spotifyData, user, top_artists }, dispatch] = useDataLayer();
  
  //donde obtengo la data necesaria de la api

  // esto solo sucede una vez
  useEffect(() => { 
    //funcion para obtener token de acceso
    setToken(getTokenFromResponse());

    window.location.hash = '';
  }, [])

  //sucede cada vez que el token de acceso cambie
  useEffect(() => {

    if(token){
      spotify.setAccessToken(token);
      //A PARTIR DE AQUI OBTENGO LA DATA QUE NECESITO
      const getSpotifyData = async () => {
        
        // aqui obtengo la data de mi usuario
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
        {token ? <Layout  spotify = { spotify }/> : <Login />}
      </div>
  );
}

export default App;
