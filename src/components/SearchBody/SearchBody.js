import './SearchBody.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchResults from '../SearchResults/SearchResults';

function SearchBody({results, handleSubmit, handleChange}) {

    return (
        <div className="main-body" >
            <div className="search-body" onSubmit={handleSubmit}>
                <div className="input-container" >
                    <input placeholder='Search for tracks, artists, etc...' className='search' type="text" onChange={handleChange} />
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="search-icon"/>
                </div>
                <div>
                    <SearchResults data = {results.album} category = "album" title = "Albums"/> 
                    <SearchResults data = {results.track} category = "track" title = "Tracks"/> 
                    <SearchResults data = {results.playlist} category = "playlist" title = "Playlist"/>
                    <SearchResults data = {results.artist} category = "artist" title = "Artistas"/>
                </div>
            </div>
        </div>

    )
}

export default SearchBody