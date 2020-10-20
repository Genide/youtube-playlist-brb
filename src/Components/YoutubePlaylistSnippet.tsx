import React from 'react'
import { IPlaylist } from '../Interfaces/YTInterfaces'

interface Props {
    playlist?: IPlaylist,
    style?: React.CSSProperties
}

export default function YoutubePlaylistSnippet({playlist, style}: Props) {
    if (!playlist) return <div style={{...style}}/>;
    if (!playlist.snippet) return <div style={{...style}}/>;

    return (
        <div style={{...style, display: "flex",}}>
            <div>
                <img src={playlist.snippet.thumbnails.default.url} alt='thumbnail'/>
            </div>
            <div style={{paddingLeft: '1em'}}>
                <table>
                    <tbody>
                        <tr>
                            <th>Playlist Title</th>
                            <td>{playlist.snippet.title}</td>
                        </tr>
                        <tr>
                            <th>Channel Name</th>
                            <td>{playlist.snippet.channelTitle}</td>
                        </tr>
                        <tr>
                            <th>Playlist Description</th>
                            <td style={{textOverflow: 'initial'}}>{playlist.snippet.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

