import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { GetPlaylistObject, RandomizeOrder } from '../Utilities/Utilities';
import PlaylistRetriever from '../Controller/PlaylistRetriever';
import PlaylistPlayer from './PlaylistPlayer';

interface Props extends RouteComponentProps {
    YoutubeApiKey: string;
}
interface State {
    playlistId: string;
    playlist: string[];
    loadingText: string;
    showYTControls: boolean;
    randomizeOrder: boolean;
}

export default class BRB extends Component<Props, State> {
    state: State = {
        playlistId: '',
        playlist: [],
        loadingText: '',
        showYTControls: false,
        randomizeOrder: true
    }
    private _playlistRetriever: PlaylistRetriever;

    constructor(props: Props) {
        super(props);

        this._playlistRetriever = new PlaylistRetriever(props.YoutubeApiKey);

        // Check the query paths        
        let url = new URL(window.location.href);
        this.state.playlistId = url.searchParams.get('list') ?? '';
        this.state.loadingText = url.searchParams.get('loadingText') ?? '';
        this.state.showYTControls = url.searchParams.get('showYTControls') === '1' ? true : false;
        this.state.randomizeOrder = url.searchParams.get('randomizeOrder') === '1' ? true : false; 
    }

    componentDidMount() {
        this.onMount();
    }

    async onMount() {
        // Get the playlist
        if (!this.state.playlistId) {
            alert('Missing playlist ID. \nRedirecting to configuration page.');
            this.props.history.push('/config');
            return;
        }
        
        let playlist = await GetPlaylistObject(this.state.playlistId, this.props.YoutubeApiKey);
        if (!playlist) {
            alert(`Invalid youtube playlist ID of ${this.state.playlistId}\nRedirecting to configuration page.`)
            this.props.history.push('/config');
            return;
        }

        try {
            let temp = await this._playlistRetriever.GetPlaylistVideoIds(this.state.playlistId);
            if (this.state.randomizeOrder) temp = RandomizeOrder(temp);
            this.setState({playlist: temp});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            (this.state.playlist.length > 0)
                ? <PlaylistPlayer
                    playlist={this.state.playlist}
                    loadingText={this.state.loadingText}
                    showYTControls={this.state.showYTControls} />
                : ''
            
        )
    }
}
