import React, { useEffect, useState } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import { useDataLayer } from '../../provider/useDataLayer';
import './Player.scss';

function Player({ token }) {
    const [{ item, playing_list, track_position }, dispatch] = useDataLayer();
    let playingTracks = playing_list === null ? item : playing_list;
    
    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [playingTracks])

    return (
      <div className = "footer-container">
          <SpotifyWebPlayer
              token = {token}
              uris = {playingTracks}
              play = {play}
              offset = {track_position}
              showSaveIcon = {true}
              callback = { state => {
                if (!state.isPlaying) setPlay(false)
              }}
              styles={{
                activeColor: '#1cb954',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
                sliderTrackColor: '#ccc'
              }}
          />
      </div>
    )
}

export default Player