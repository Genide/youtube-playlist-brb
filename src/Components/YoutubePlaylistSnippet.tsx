import React, { Component, Fragment } from 'react'
import { IPlaylist } from '../Interfaces/YTInterfaces'

interface Props {
    playlist?: IPlaylist,
    style?: React.CSSProperties
}
interface State {
    
}

export default class YoutubePlaylistSnippet extends Component<Props, State> {
    state = {}

    render() {
        if (!this.props.playlist) return <div style={{...this.props.style}}/>;
        if (!this.props.playlist.snippet) return <div style={{...this.props.style}}/>;

        return (
            <div style={{...this.props.style, display: "flex",}}>
                <div>
                    <img src={this.props.playlist.snippet.thumbnails.default.url} alt='thumbnail'/>
                </div>
                <div style={{paddingLeft: '1em'}}>
                    <table>
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
                                <td style={{textOverflow: 'initial'}}>{this.props.playlist.snippet.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
