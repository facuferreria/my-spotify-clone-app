import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useDataLayer } from '../../provider/useDataLayer';
import { newContext } from '../Context/PlayerContext';
import './Track.scss';

function Track({ track, position, calculateTime, isFromPlaylist }) {

  const { playTrack } = useContext(newContext);
  const [trackInLibrary, setTrackInLibrary] = useState(false);
  const [{ playlists_tracks }] = useDataLayer();
  const millisec = track?.duration_ms;

  return (
    <div  className = "track-container">     
      <p className = "track-position">{ position + 1 }</p>
      <div className = "track-information" onClick = {() => playTrack(isFromPlaylist, position, track, playlists_tracks)}>
        <img className = "track-img" src = { track?.album?.images[2]?.url} alt = "track"/>
        <div>
          <h4>{ track?.name }</h4>
          <p>{ track?.artists.map(artist => artist.name).join(", ") }</p>
        </div>
      </div>
      <div onClick = {() => setTrackInLibrary(!trackInLibrary)}>
        {
          trackInLibrary
          ? <FontAwesomeIcon icon="fa-solid fa-heart" className='heart'/> 
          : <FontAwesomeIcon icon="fa-regular fa-heart" className='heart-empty' /> 
        }
      </div>
      <p className = "list-time">{ calculateTime(millisec) }</p>
    </div>
  )
}

export default Track