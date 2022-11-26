import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';

function PlaylistTrack({ track, position, playPlaylist }) {
  const [isHeart, setHeartActive] = useState(false);
  const [{}, dispatch] = useDataLayer();

  const setTrackState = async () => {

    await dispatch({
      type: "SET_TRACK_POSITION",
      track_position: position,
    });

    await playPlaylist();
  } 

  return (
    <div onClick = {() => setTrackState()} >
      <div>
        <div>         
          <p>{ position + 1 }</p>
          <img src = { track?.album.images[2].url} />
          <h3>{ track?.name }</h3>
          <p>{ track?.artists.map(artist => artist.name).join(", ") }</p>
          <div onClick = {() => setHeartActive(!isHeart)}>
            {
              isHeart
              ? <FontAwesomeIcon icon="fa-solid fa-heart" /> 
              : <FontAwesomeIcon icon="fa-regular fa-heart" /> 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistTrack