import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';

function TrackComponent({ track, position }) {
  const [isHeart, setHeartActive] = useState(false);
  const [isPlaying, setPlay] = useState(false);
  const [{ spotifyData }, dispatch] = useDataLayer();

  const playTrack = async (track) => {
    const device = spotifyData.getMyDevices()
    console.log(device)
    const putPlay = await spotifyData.play();
    console.log(putPlay)
    const playSong = await spotifyData.getMyCurrentPlayingTrack();

    await dispatch({
      type: "SET_ITEM",
      item: playSong.item,
    });

    await dispatch({
      type: "SET_PLAYING",
      playing: true,
    });

    setPlay(!isPlaying)
  }

  return (
    <div>
      <div>
        <div>         
          <p>{ position + 1 }</p>
          <div onClick = {() => playTrack(track)}>
            {
              isPlaying
              ? <FontAwesomeIcon icon="fa-solid fa-pause" />
              : <FontAwesomeIcon icon="fa-solid fa-play" /> 
            }
          </div>
          <img src = { track.album.images[2].url} />
          <h3>{ track.name }</h3>
          <p>{ track.artists.map(artist => artist.name).join(", ") }</p>
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

export default TrackComponent