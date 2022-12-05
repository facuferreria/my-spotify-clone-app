import React, { useEffect } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';


function Lyrics() {

    const [{item}, dispatch] = useDataLayer();
    let track = item?.name;
    let artist = item?.artists[0].name;

    const getLyrics = async (artist, song) => {
        const lyricsUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`
        const fetchLyrics = await fetch(lyricsUrl);
        const getLyrics = fetchLyrics.json();

        console.log(getLyrics);
    }

    useEffect(() => getLyrics(artist, track), [track, artist])
    return (
        <div>
            tu mama
        </div>
    )
}

export default Lyrics