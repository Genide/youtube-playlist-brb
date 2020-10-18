

export interface IPlayListItemListResponse {
    /**
     * Identifies the API resource's type. The value will be youtube#playlistItemListResponse.
     */
    kind: "youtube#playlistItemListResponse",
    /**
     * The Etag of this resource.
     */
    etag: string,
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string,
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string,
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo: {
        /**
         * The total number of results in the result set.
         */
        totalResults: number,
        /**
         * The number of results included in the API response.
         */
        resultsPerPage: number
    },
    /**
     * The list of videos in the playlist returned
     */
    items: IPlaylistItem[],
    /**
     * The error object. If this is populated, then the request as failed.
     */
    error?: {
        /**
         * HTTP Error code
         */
        code: number,
        /**
         * Array of request errors
         */
        errors: YTRequestError[],
        /**
         * General error message
         */
        message: string
    }
}

export interface YTRequestError {
    domain: string,
    location: string,
    locationType: string,
    message: string,
    reason: string
}

export interface IPlaylistItem {
    /**
     * Identifies the API resource's type. The value will be youtube#playlistItem.
     */
    kind: "youtube#playlistItem",
    /**
     * The Etag of this resource.
     */
    etag: string,
    /**
     * The ID that YouTube uses to uniquely identify the playlist item.
     */
    id: string,
    /**
     * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
     */
    snippet?: IPlaylistItemSnippet,
    /**
     * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
     */
    contentDetails?: IPlaylistItemContentDetails,
    /**
     * The status object contains information about the playlist item's privacy status.
     */
    status: {
        /**
         * The playlist item's privacy status. The channel that uploaded the video that the playlist item represents can set this value using either the videos.insert or videos.update method.
         */
        privacyStatus: string
    }
}

/**
 * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
 */
export interface IPlaylistItemSnippet {
    /**
     * The date and time that the item was added to the playlist. The value is specified in ISO 8601 format.
     */
    publishedAt: string,
    /**
     * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
     */
    channelId: string,
    /**
     * The item's title.
     */
    title: string,
    /**
     * The item's description.
     */
    description: string,
    /**
     * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails: {
        [key in YoutubeThumbnailKeys]: {
            /**
             * The image's URL.
             */
            url: string,
            /**
             * The image's width.
             */
            width: number,
            /**
             * The image's height.
             */
            height: number
        }
    },
    /**
     * The channel title of the channel that the playlist item belongs to.
     */
    channelTitle: string,
    /**
     * The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
     */
    playlistId: string,
    /**
     * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
     */
    position: number,
    /**
     * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
     */
    resourceId: {
        /**
         * The kind, or type, of the referred resource.
         */
        kind: string,
        /**
         * If the snippet.resourceId.kind property's value is youtube#video, then this property will be present and its value will contain the ID that YouTube uses to uniquely identify the video in the playlist.
         */
        videoId: string,
    }
}

/**
 * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
 */
export interface IPlaylistItemContentDetails {
    /**
     * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
     */
    videoId: string,
    /**
     * The time, measured in seconds from the start of the video, when the video should start playing. 
     * (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
     * @deprecated This property has been deprecated and, if set, its value is ignored.
     */
    startAt: string,
    /**
     * The time, measured in seconds from the start of the video, when the video should stop playing. 
     * (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) 
     * By default, assume that the video.endTime is the end of the video.
     * @deprecated This property has been deprecated and, if set, its value is ignored.
     */
    endAt: string,
    /**
     * A user-generated note for this item. The property value has a maximum length of 280 characters.
     */
    note: string,
    /**
     * The date and time that the video was published to YouTube. The value is specified in ISO 8601 format.
     */
    videoPublishedAt: string,
}

export interface IPlaylistListResponse {
    kind: "youtube#playlistListResponse",
    etag: string,
    nextPageToken?: string,
    prevPageToken?: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    },
    items: IPlaylist[]
}

export interface IPlaylist {
    kind: "youtube#playlist",
    etag: string,
    id: string,
    snippet?: {
        publishedAt: string,
        channelId: string,
        title: string,
        description: string,
        thumbnails: {
            [key in YoutubeThumbnailKeys]: {
                "url": string,
                "width": number,
                "height": number
            }
        },
        channelTitle: string,
        tags: string[],
        defaultLanguage: string,
        localized: {
            title: string,
            description: string
        }
    },
    status?: {
        privacyStatus: string
    },
    contentDetails?: {
        itemCount: number
    },
    player?: {
        embedHtml: string
    },
    localizations?: {
        [key: string]: {
            title: string,
            description: string
        }
    }
}

/**
 * The available youtube thumbnail qualities
 */
export type YoutubeThumbnailKeys = "default" | "medium" | "high" | "standard" | "maxres";