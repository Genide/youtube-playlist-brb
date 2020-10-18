import React, { Component, Fragment } from 'react'
import { IPlaylist } from '../Interfaces/YTInterfaces'

interface Props {
    playlist?: IPlaylist
}
interface State {
    
}

export default class YoutubePlaylistSnippet extends Component<Props, State> {
    state = {}

    render() {
        if (!this.props.playlist) return <Fragment />;
        if (!this.props.playlist.snippet) return <Fragment />;

        return (
            <div style={{display: "flex", flexGrow: 1, padding: '1em'}}>
                <div>
                    <img src={this.props.playlist.snippet.thumbnails.default.url} alt='thumbnail'/>
                </div>
                <div style={{paddingLeft: '1em'}}>
                    <table >
                        <tbody>
                            <tr>
                                <th>Playlist Title</th>
                                <td>{this.props.playlist.snippet.title}</td>
                            </tr>
                            <tr>
                                <th>Channel Name</th>
                                <td>{this.props.playlist.snippet.channelTitle}</td>
                            </tr>
                            <tr>
                                <th>Playlist Description</th>
                                <td>{this.props.playlist.snippet.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
