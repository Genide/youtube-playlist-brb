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
    videoVolume: number;
}

export default class BRB extends Component<Props, State> {
    state: State = {
        playlistId: '',
        playlist: [],
        loadingText: '',
        showYTControls: false,
        randomizeOrder: true,
        brbImageLink: '',
        beepVolume: 10,
        videoVolume: 100,
    }
    private _playlistRetriever: PlaylistRetriever;

    constructor(props: Props) {
        super(props);

        this._playlistRetriever = new PlaylistRetriever(props.YoutubeApiKey);
    }

    componentDidMount() {
        this.onMount();
    }

    async onMount() {
        let url = new URL(window.location.href);
        
        let validationObj = await this.validateQueryParams(url);
        if (!validationObj.isValid) {
            alert(validationObj.errorMessage + '\nRedirecting to configuration page.');
            this.props.history.push('/config');
            return;
        }

        let newState = validationObj.state;

        try {
            newState.playlist = await this._playlistRetriever.GetPlaylistVideoIds(newState.playlistId);
            if (newState.randomizeOrder) newState.playlist = RandomizeOrder(newState.playlist);
            this.setState(newState);
        } catch (error) {
            console.error(error);
        }
    }

    private async validateQueryParams(url: URL) {
        let returnObject = {
            errorMessage: '',
            isValid: true,
            state: {} as State
        }

        let newState = {} as State;
        newState.playlistId = url.searchParams.get('list') ?? '';
        let playlistIdObj = await this.isValidPlaylistId(newState.playlistId);
        if (!playlistIdObj.isValid) {
            returnObject.isValid = false;
            returnObject.errorMessage = playlistIdObj.errorMessage;
            return returnObject;
        }

        newState.loadingText = url.searchParams.get('loadingText') ?? '';
        newState.showYTControls = url.searchParams.get('showYTControls') === '1' ? true : false;
        newState.randomizeOrder = url.searchParams.get('randomizeOrder') === '1' ? true : false;

        newState.brbImageLink = url.searchParams.get('brbImage') ?? '';
        let brbImageErrorMessage = '';
        if (newState.brbImageLink) {
            brbImageErrorMessage = await ValidateImageLink(newState.brbImageLink);
            if (brbImageErrorMessage) {
                returnObject.isValid = false;
                returnObject.errorMessage = brbImageErrorMessage;
                return returnObject;
            }
        }

        let beepVolumeObj = this.isValidVolume(url.searchParams.get('beepVolume'), 10, 'beep volume');
        if (!beepVolumeObj.isValid) {
            returnObject.isValid = false;
            returnObject.errorMessage = beepVolumeObj.errorMessage;
            return returnObject;
        }
        newState.beepVolume = beepVolumeObj.volume;

        let videoVolumeObj = this.isValidVolume(url.searchParams.get('videoVolume'), 100, 'video volume');
        if (!videoVolumeObj.isValid) {
            returnObject.isValid = false;
            returnObject.errorMessage = videoVolumeObj.errorMessage;
            return returnObject;
        }
        newState.videoVolume = videoVolumeObj.volume;

        returnObject.state = newState;
        return returnObject;
    }

    private async isValidPlaylistId(playlistId: string) {
        let returnObject = {
            errorMessage: '',
            isValid: true,
            playlistId: ''
        }

        if (!playlistId) {
            returnObject.errorMessage = 'Missing playlist ID.';
            returnObject.isValid = false;
            return returnObject;
        }
        
        let playlist = await GetPlaylistObject(playlistId, this.props.YoutubeApiKey);
        if (!playlist) {
            returnObject.errorMessage = `Invalid youtube playlist ID of ${playlistId}`;
            returnObject.isValid = false;
            return returnObject;
        }

        return returnObject;
    }

    private isValidVolume(queryParam: string | null, defaultVolume: number, objectName: string) {
        let returnObject = {
            errorMessage: '',
            isValid: true,
            volume: 0
        }

        if (!queryParam) {
            returnObject.volume = defaultVolume;
        } else {
            returnObject.volume = parseInt(queryParam);
        }
        if (returnObject.volume < 0 || returnObject.volume > 100 || isNaN(returnObject.volume)) {
            returnObject.errorMessage = `Invalid value for ${objectName} of ${queryParam}. Must be between 0 and 100 inclusive.`
            returnObject.isValid = false;
            returnObject.volume = NaN;
        }

        return returnObject;
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
                    videoVolume={this.state.videoVolume}
                />
                : ''
            
        )
    }
}
