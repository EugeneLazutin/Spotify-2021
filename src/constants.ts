export const client_id = '398d86cdf9f944129e18546120b88702';

const scopes = ['user-read-currently-playing', 'playlist-read-private', 'playlist-modify-public', 'playlist-modify-private'];
export const loginUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${location.origin}&scope=${encodeURIComponent(scopes.join(' '))}`;



