import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDataLayer } from '../../provider/useDataLayer';
import PlaylistBody from '../PlaylistBody/PlaylistBody';
import './PlaylistSection.scss'

function PlaylistSection() {

  const { playlistId } = useParams();
  const [{ spotifyData }, dispatch] = useDataLayer();
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {

    const getPlaylist = async (id) => {
      const myPlaylistTracks = await spotifyData.getPlaylist(id);

      dispatch({
        type: "SET_PLAYLIST_DATA",
        playlist_data: myPlaylistTracks
      })

      dispatch({
        type: "SET_PLAYLISTS_TRACKS",
        playlists_tracks: myPlaylistTracks.tracks.items
      })

      setLoading(false);
    }
    getPlaylist(playlistId)
  
  
  }, [playlistId, spotifyData, dispatch])

  return (
    <div className = "main-body">
      {
        loading 
        ? <h3>Cargando...</h3> 
        : <PlaylistBody />
      }
    </div>
  )
}

export default PlaylistSection