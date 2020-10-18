import { IPlaylistItem, IPlayListItemListResponse } from "../Interfaces/YTInterfaces";


export default class YTPlaylistRetriever {
    private _apiKey: string;
    /**
     * Creates a YTPlaylistRetriever
     * @param apiKey The youtube v3 api key
     */
    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    /**
     * Returns a list of youtube videos
     * @param playlistId The youtube play list id
     */
    public async GetPlaylistVideos(playlistId: string): Promise<IPlaylistItem[]> {
        let list: IPlaylistItem[] = [];
        let token = '';

        do {
            let temp = await this._getPlaylistVideoPage(playlistId, token);
            if (temp.error) {
                throw new Error(temp.error.message);
            }
            list.push(...temp.items);
            token = temp.nextPageToken ?? "";
        } while (token !== "")

        return list;
    }

    /**
     * Returns a list of youtube video IDs
     * @param playlistId The youtube playlist ID
     */
    public async GetPlaylistVideoIds(playlistId: string): Promise<string[]> {
        let list = await this.GetPlaylistVideos(playlistId);
        return list.map(video => video.contentDetails?.videoId ?? "")
            .filter(id => id !== '');
    }

    /**
     * Gets a page of videos from the youtube playlist
     * @param playlistId The youtube playlist ID
     * @param pageToken The page token for the next video
     */
    private async _getPlaylistVideoPage(playlistId: string, pageToken?: string): Promise<IPlayListItemListResponse> {
        let url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
        url.searchParams.append('part', 'contentDetails');
        url.searchParams.append('playlistId', playlistId);
        url.searchParams.append('key', this._apiKey);
        url.searchParams.append('maxResults', '50');
        if (pageToken) url.searchParams.append('pageToken', pageToken);
        
        let response = await fetch(url.href, {
            headers: {
                'Accept': 'application/json',
            }
        });
        let playlist: IPlayListItemListResponse = await response.json();

        return playlist;
    }
}