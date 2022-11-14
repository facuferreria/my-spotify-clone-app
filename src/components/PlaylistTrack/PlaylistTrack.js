import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function PlaylistTrack({ track, position }) {
    const [isHeart, setHeartActive] = useState(false);

  return (
    <div>
        <div>
            <div>         
                <p>{ position + 1 }</p>
                <img src = { track.album.images[2].url} />
                <h3>{ track.name }</h3>
                <p>{ track.artists.map(artist => artist.name).join(", ") }</p>
                <div>
                    {
                    isHeart 
                    ? <FontAwesomeIcon icon="fa-solid fa-heart" /> 
                    : <FontAwesomeIcon icon="fa-regular fa-heart" /> }
                </div>
            </div>
            <div></div>
    </div>
    </div>
  )
}

export default PlaylistTrack