import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import './PlaylistTrack.scss'

function PlaylistTrack({ track, position, playPlaylist, calculateTime }) {
  const [trackInLibrary, setTrackInLibrary] = useState(false);
  const [{}, dispatch] = useDataLayer();
  let millisec = track?.duration_ms;

  const setTrackState = async () => {
    await dispatch({
      type: "SET_TRACK_POSITION",
      track_position: position,
    });

    await playPlaylist();
  } 

  return (
    <div  className = "track-container" onClick = {() => setTrackState()} >     
      <p className = "track-position">{ position + 1 }</p>
      <div className = "track-data">
        <img className = "track-img" src = { track?.album.images[2].url} />
        <div>
          <h3>{ track?.name }</h3>
          <p>{ track?.artists.map(artist => artist.name).join(", ") }</p>
        </div>
      </div>
      <div onClick = {() => setTrackInLibrary(!trackInLibrary)}>
        {
          trackInLibrary
          ? <FontAwesomeIcon icon="fa-solid fa-heart" className='heart'/> 
          : <FontAwesomeIcon icon="fa-regular fa-heart" /> 
        }
      </div>
      <p className = "list-time">{ calculateTime(millisec) }</p>
    </div>
  )
}

export default PlaylistTrack