export const initialState = {
    user: null,
    top_tracks: null,
    top_artists: null,
    top_albums: null,
    playlists: [],
    playlists_tracks: [],
    playing: false,
    spotify_recommendations: null,
    recently_played: null,
    item: null,
    gettingData: false,
    spotifyData: null,
}

const reducer = (state, action) => {
    switch (action.type) {

        case "SET_SPOTIFY":
            return {
                ...state,
                spotifyData: action.spotify,
            };

        case "SET_DATA":
            return {
                ...state,
                gettingData: action.gettingData,
            };
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_PLAYLISTS_TRACKS":
            return {
                ...state,
                playlists_tracks: action.playlists_tracks,
            };
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };
        case "SET_TOP_ARTISTS":
            return{
                 ...state,
                top_artists: action.top_artists,
            };
        case "SET_TOP_ALBUMS":
            return{
                ...state,
                top_albums: action.top_albums,
            };
        case "SET_TOP_TRACKS":
            return{
                ...state,
                top_tracks: action.top_tracks,
            };
        case "SET_RECOMMENDED":
            return{
                ...state,
                spotify_recommendations: action.get_recomended,
            }
        case "SET_RECENTLY_PLAYED":
            return {
                ...state,
                recently_played: action.recently_played,
            }
        default:
            return state;
    }
}

export default reducer;
