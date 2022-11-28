import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDataLayer } from '../../provider/useDataLayer';
import PlaylistBody from '../PlaylistBody/PlaylistBody';
import './PlaylistSection.scss'

function PlaylistSection() {

  const { playlistId } = useParams();
  const [{ playlists_tracks, spotifyData }, dispatch] = useDataLayer();
  const [ loading, setLoading ] = useState(true);
  const [ playlistData, setPlaylistData ] = useState({});

  const getPlaylist = async (id) => {
    const myPlaylistTracks = await spotifyData.getPlaylist(id);
    setPlaylistData(myPlaylistTracks);
    
    dispatch({
      type: "SET_PLAYLISTS_TRACKS",
      playlists_tracks: myPlaylistTracks.tracks.items
    })

    setLoading(false);
  }
  
  useEffect(() => getPlaylist(playlistId), [playlistId])

  return (
    <div className = "playlist-container">
      {
        loading 
        ? <h3>Cargando...</h3> 
        : <PlaylistBody playlistTrackData = {playlists_tracks} playlistData = { playlistData } />
      }
    </div>
  )
}

export default PlaylistSection