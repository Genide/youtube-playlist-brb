import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { GetPlaylistObject, RandomizeOrder, ValidateImageLink } from '../Utilities/Utilities';
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
    brbImageLink: string;
    beepVolume: number;
}

export default class BRB extends Component<Props, State> {
    state: State = {
        playlistId: '',
        playlist: [],
        loadingText: '',
        showYTControls: false,
        randomizeOrder: true,
        brbImageLink: '',
        beepVolume: 10
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
        this.state.brbImageLink = url.searchParams.get('brbImage') ?? '';
        // this.state.beepVolume is set in onMount
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
            alert(`Invalid youtube playlist ID of ${this.state.playlistId}\nRedirecting to configuration page.`);
            this.props.history.push('/config');
            return;
        }

        let brbImageErrorMessage = '';
        if (this.state.brbImageLink) {
            brbImageErrorMessage = await ValidateImageLink(this.state.brbImageLink);
        }
        if (brbImageErrorMessage) {
            alert(`Invalid BRB image of ${this.state.brbImageLink}\n${brbImageErrorMessage}\nRedirecting to configuration page.`);
            this.props.history.push('/config');
            return;
        }

        let url = new URL(window.location.href);
        let beepVolumeQueryParam = url.searchParams.get('beepVolume');
        let beepVolume = parseInt(beepVolumeQueryParam ? beepVolumeQueryParam : '10');
        if (beepVolume < 0 || beepVolume > 100 || isNaN(beepVolume)) {
            alert(`Invalid beep volume of ${beepVolumeQueryParam}. Must be between 0 and 100 inclusive.\nRedirecting to configuration page.`)
            this.props.history.push('/config');
            return;
        }
        this.state.beepVolume = beepVolume;

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
                    showYTControls={this.state.showYTControls}
                    brbImageLink={this.state.brbImageLink} 
                    beepVolume={this.state.beepVolume}
                />
                : ''
            
        )
    }
}
