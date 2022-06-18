import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from './spotify';
import './styles/App.scss';
import SpotifyWebApi from "spotify-web-api-js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useDataLayer } from './components/Hooks/useDataLayer';

library.add(fas, fab);


//instancia de la libreria de spotify
let spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ user, recently_played, top_artists, top_tracks, playlists, gettingData }, dispatch] = useDataLayer();
  const accessToken = getTokenFromResponse();
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
      
      dispatch({
        type: "GET_DATA",
        gettingData: false,
      })

      // aqui obtengo la data de mi usuario
      spotify.getMe().then((data) =>{
        dispatch({
          type: "GET_USER",
          user: data,
        })
      });
      
      spotify.getUserPlaylists().then((data) => {
        dispatch({
            type: "GET_PLAYLISTS",
            playlists: data,
        })
      });
      
      spotify.getMyTopTracks({limit: 4}).then((data) => {
        dispatch({
          type: "GET_TOP_TRACKS",
          top_tracks: data,
        })
      });

      spotify.getMyRecentlyPlayedTracks({limit: 4}).then((data) => {
        dispatch({
            type: "RECENTLY_PLAYED",
            recently_played: data,
        })
      });

      spotify.getMyTopArtists({limit: 4}).then((data) => {
        dispatch({
          type: "GET_TOP_ARTISTS",
          top_artists: data,
        })
      });
    }
  }, [token]);
  
  //si token es valido ingresa al programa y sino vuelve al componente login
  return (
    
      <div className="App">
        {token ? <Player spotify= {spotify} /> : <Login />}
      </div>
  );
}

export default App;
