export const initialState = {
    user: null,
    top_tracks: null,
    top_artists: null,
    top_albums: null,
    playlists: [],
    playlists_tracks: [],
    track_position: 0,
    playing_list: null,
    spotify_recommendations: null,
    recently_played: null,
    item: null,
    gettingData: false,
    spotifyData: null,
    user_library: null,
}

const reducer = (state, action) => {
    switch (action.type) {

        case "SET_SPOTIFY":
            return {
                ...state,
                spotifyData: action.spotifyData,
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
        case "SET_PLAYLIST_DATA":
            return {
                ...state,
                playlist_data: action.playlist_data,
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

        case "SET_TRACK_POSITION":
            return {
                ...state,
                track_position: action.track_position,
            }
        
        case "SET_PLAYING_LIST":
            return {
                ...state,
                playing_list: action.playing_list,
            }
        
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }

        case "SET_LIBRARY":
            return  {
                ...state,
                user_library: action.user_library,
            };

        default:
            return state;
    }
}

export default reducer;
