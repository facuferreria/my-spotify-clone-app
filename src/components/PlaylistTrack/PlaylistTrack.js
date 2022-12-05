import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDataLayer } from '../../provider/useDataLayer';
import './PlaylistTrack.scss';
import { Link } from 'react-router-dom';

function PlaylistTrack({ track, position, playPlaylist, calculateTime }) {
  const [trackInLibrary, setTrackInLibrary] = useState(false);
  const [{}, dispatch] = useDataLayer();
  let millisec = track?.duration_ms;

  const setTrackState = async () => {
    await dispatch({
      type: "SET_TRACK_POSITION",
      track_position: position,
    });

    await dispatch({
      type: "SET_ITEM",
      item: track,
    });
    await playPlaylist();
  } 

  return (
    <div  className = "track-container" onClick = {() => setTrackState()} >     
      <p className = "track-position">{ position + 1 }</p>
      <div className = "track-information">
        <img className = "track-img" src = { track?.album.images[2].url} />
        <div>
        <Link className= "option-title" to= "/lyrics">
          <h4>{ track?.name }</h4>
        </Link>
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