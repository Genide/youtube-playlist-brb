import { IPlaylist, IPlaylistListResponse } from "../Interfaces/YTInterfaces";

/* istanbul ignore next */
/**
 * Creates a new array and randomizes the order of the elements
 * @param array Input array
 */
export function RandomizeOrder<T>(array: T[]): T[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let shuffledArray = [...array];

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = shuffledArray[currentIndex];
        shuffledArray[currentIndex] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
}

export async function GetPlaylistObject(playlistId: string, YTApiKey: string, includeSnippet: boolean = false): Promise<IPlaylist | undefined> {
    let url = new URL('https://www.googleapis.com/youtube/v3/playlists');
    let parts = 'id'
    if (includeSnippet) parts += ',snippet';
    url.searchParams.append('part', parts);
    url.searchParams.append('id', playlistId);
    url.searchParams.append('key', YTApiKey);
    let request = await fetch(url.href, {
        headers: {
            "Accept": "application/json"
        }
    })

    let json: IPlaylistListResponse = await request.json();
    let playlist = json.items.find(playlist => playlist.id === playlistId)

    return playlist;
}

/**
 * Determines if the specified URL is a valid reachable image.
 * Returns an empty string if valid
 * @param imageLink The URL link to an image
 */
export async function ValidateImageLink(imageLink: string): Promise<string> {
    if (!imageLink) {
        return 'Missing image link';
    }

    try {
        let response = await fetch(imageLink);
        if (response.status !== 200) {
            return 'Unable to load image';
        }

        let blob = await response.blob()
        let allowedBlobTypes = ['image/png', 'image/jpeg', 'image/gif'];
        if (!allowedBlobTypes.includes(blob.type)) {
            console.error(blob);
            return 'This is not a link for an image';
        }

        return '';
    } catch (error) {
        return 'Unable to load image';
    }
}