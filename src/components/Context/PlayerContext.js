import React, { createContext } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';

export let newContext = createContext();

export function PlayerContext({children}) {

  const  [, dispatch] = useDataLayer();

  const calculateTime = (millisec) => {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        minutes =  minutes - (hours * 60) ;
        hours = `${hours} h`;
    }
    minutes = `${minutes} min`;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? `${seconds}s` : `0${seconds}s`;
    if (hours !== "") {
        return `${hours} ${minutes}`;
    }
    return `${minutes} ${seconds}`;
  }


  const playPlaylist = (list) => {
    let uriTracksArray = [];
    list.forEach(item => uriTracksArray.push(item.track.uri));

    dispatch({
      type: "SET_PLAYING_LIST",
      playing_list: uriTracksArray,
    });

  }

  const playTrack = async (isFromList, position, track, list) => {

    if (isFromList) {
      await dispatch({
        type: "SET_TRACK_POSITION",
        track_position: position,
      });
          
      playPlaylist(list);
    } 
    else {
      await dispatch({
        type: "SET_ITEM",
        item: track,
      });
    }  
  } 

  return (
    <newContext.Provider value= {{playPlaylist, playTrack, calculateTime}}>
      {children}
    </newContext.Provider>
  )
}
