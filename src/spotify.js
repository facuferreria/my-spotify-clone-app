const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = '84c134b175474ddabeef0e0b3f9cb389'
const redirectUri = 'http://localhost:3000/'
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-follow-modify",
    "user-follow-read",
    "playlist-modify-public",
    "playlist-modify-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-position",
    "user-read-private",
    "streaming",
    "user-read-email",
    "user-library-read",
    "user-library-modify"
  ];

  //obtain acces token from url
  export const getTokenFromResponse = () => {
    let params = new URLSearchParams(window.location.hash.substring(1));
    let token = params.get("access_token");
    return token;
  };

  //acces url
const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export default accessUrl;