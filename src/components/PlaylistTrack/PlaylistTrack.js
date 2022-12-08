import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDataLayer } from '../../provider/useDataLayer';
import './PlaylistTrack.scss';

function PlaylistTrack({ track, position, playPlaylist, calculateTime }) {
  const [trackInLibrary, setTrackInLibrary] = useState(false);
  const [ {item} , dispatch] = useDataLayer();
  let millisec = track?.duration_ms;

  const playTrack = async (isFromList) => {

    if (isFromList === true) {
      await dispatch({
        type: "SET_TRACK_POSITION",
        track_position: position,
      });
      
      await playPlaylist();
    } 
    
    else {
      await dispatch({
        type: "SET_ITEM",
        item: track,
      });
    }  
    
  } 

  return (
    <div  className = "track-container" onClick = {() => playTrack(true)} >     
      <p className = "track-position">{ position + 1 }</p>
      <div className = "track-information">
        <img className = "track-img" src = { track?.album.images[2].url} alt = "track"/>
        <div>
          <h4>{ track?.name }</h4>
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