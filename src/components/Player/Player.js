import React, { useEffect, useState } from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback/lib'
import { useDataLayer } from '../../provider/useDataLayer';

function Player({ token }) {
    const [{ item, playing_list, track_position }, dispatch] = useDataLayer();
    let playingTracks = playing_list === null ? item : playing_list;
    
    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [playingTracks])

    return (
      <div>
          <SpotifyWebPlayer
              token = {token}
              uris = {playingTracks}
              play = {play}
              offset = {track_position}
              callback = { state => {
                if (!state.isPlaying) setPlay(false)
              }}
          />
      </div>
    )
}

export default Player