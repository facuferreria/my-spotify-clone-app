import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDataLayer } from '../../provider/useDataLayer';
import PlaylistBody from '../PlaylistBody/PlaylistBody';

function PlaylistSection({ spotify }) {

  const {playlistId} = useParams();
  const [{ playlists_tracks }, dispatch] = useDataLayer();
  const [loading, setLoading] = useState(true);
  const [playlistData, setPlaylistData] = useState({});

  const getPlaylist = async (id) => {
    const myPlaylistTracks = await spotify.getPlaylist(id);
    setPlaylistData(myPlaylistTracks);
    
    dispatch({
      type: "SET_PLAYLISTS_TRACKS",
      playlists_tracks: myPlaylistTracks.tracks.items
    })

    setLoading(false);
  }
  
  useEffect(() => getPlaylist(playlistId), [playlistId])
  console.log(playlistData);

  return (
    <div>
      {
        loading 
        ? <h3>Cargando...</h3> 
        : <PlaylistBody playlistTrackData = {playlists_tracks} playlistData = { playlistData } />
      }
    </div>
  )
}

export default PlaylistSection