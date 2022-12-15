import React, { useEffect, useState } from 'react'
import { useDataLayer } from '../../provider/useDataLayer';
import Loader from '../Loader/Loader';
import SearchBody from '../SearchBody/SearchBody';
import './SearchContainer.scss'

function SearchContainer() {

    const initialState = {
        album: null,
        playlist: null,
        track: null,
        artist: null
    }

    const [ loading, setLoading ] = useState(true);
    const [{ spotifyData }] = useDataLayer();
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState(initialState)

    const handleChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

   

    useEffect(() => {
        
        const searchInSpotify = async () => {
            try {
                const searchResults = await spotifyData.search(searchValue, ["album", "artist", "track", "playlist"], {limit: 4});
                setResults({
                    album: searchResults.albums,
                    playlist: searchResults.playlists,
                    track: searchResults.tracks,
                    artist: searchResults.artists
                })
            } catch (error) {
                setResults(initialState);
                console.error(`No se encuentra lo que estas buscando... status: ${error.status} (${error.statusText})`);
            }

            setLoading(false);
        }
        
        searchInSpotify()

    }, [searchValue, spotifyData]);

    return (
        <div className = "search-container">{ 
            loading ? <Loader /> : <SearchBody results = {results} handleSubmit = {handleSubmit} handleChange = {handleChange} /> 
        }</div>
    )
}

export default SearchContainer