import React from 'react'
import Track from '../Track/Track'

function TrackList({data, time, isFromPlaylist}) {
  return (
    <div>
        { 
          data.map((item, id) =>  <Track 
                                    position={id} 
                                    key= {`${item.track?.id}${Math.random()*100000}`} 
                                    track = {item.track} 
                                    calculateTime = {time}
                                    isFromPlaylist = {isFromPlaylist}
                                    list = {data}
                                  />) 
        }
    </div>
  )
}

export default TrackList