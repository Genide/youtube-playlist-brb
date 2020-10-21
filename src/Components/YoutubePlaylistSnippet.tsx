import { Box, useTheme } from '@material-ui/core';
import React from 'react'
import { IPlaylist } from '../Interfaces/YTInterfaces'


interface Props {
    playlist?: IPlaylist,
    style?: React.CSSProperties
}

export default function YoutubePlaylistSnippet({playlist, style}: Props) {
    const theme = useTheme();
    if (!playlist) return <div style={{...style}}/>;
    if (!playlist.snippet) return <div style={{...style}}/>;

    return (
        <Box style={{...style, display: "flex", color: theme.palette.text.primary}}>
            <Box>
                <img src={playlist.snippet.thumbnails.default.url} alt='thumbnail'/>
            </Box>
            <Box style={{paddingLeft: '1em'}}>
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
            </Box>
        </Box>
    );
}

