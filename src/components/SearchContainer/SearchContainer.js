import React, { useState, useEffect  } from 'react'
import './SearchContainer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDataLayer } from '../../provider/useDataLayer';
import SearchResults from '../SearchResults/SearchResults';

function SearchContainer() {

    const [{ spotifyData }] = useDataLayer();
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState({
        album: null,
        playlist: null,
        track: null,
        artist: null
    })

    const handleChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

   

    useEffect(() => {
        
        const searchInSpotify = async () => {
            const searchResults = await spotifyData.search(searchValue, ["album", "artist", "track", "playlist"], {limit: 4});
            setResults({
                album: searchResults.albums,
                playlist: searchResults.playlists,
                track: searchResults.tracks,
                artist: searchResults.artists
            })
        }
        
        searchInSpotify()

    }, [searchValue, spotifyData]);

    console.log(results.album, results.track, results.artist);
    return (
        <div className="main-body" >
            <div className="search-container" onSubmit={handleSubmit}>
                <div className="input-container" >
                    <input placeholder='Search for tracks, artists, etc...' className='search' type="text" onChange={handleChange} />
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-icon"/>
                </div>
                <div>
                    <SearchResults inputValue = {searchValue} data = {results.album} category = "album" title = "Albums"/> 
                    <SearchResults inputValue = {searchValue} data = {results.track} category = "track" title = "Playlists"/> 
                    <SearchResults inputValue = {searchValue} data = {results.artist} category = "artist" title = "Artistas"/>
                </div>
                
            </div>
        </div>

    )
}

export default SearchContainer