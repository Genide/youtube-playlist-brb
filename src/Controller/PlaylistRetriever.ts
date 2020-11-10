import { IPlaylistItem } from "../Interfaces/YTInterfaces";
import { GetPlaylistVideoPage } from "../Utilities/Utilities";


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
            let temp = await GetPlaylistVideoPage(playlistId, this._apiKey, token);
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
}