import React, { Component } from 'react'
import './App.css';
import YTPlaylistRetriever from './Controller/PlaylistRetriever';
import AppConfig from './AppConfig.json';
import { RandomizeOrder } from './Utilities/Utilities';
import ConfigForm, { onSubmitParameters } from './Components/ConfigForm';
import PlaylistPlayer from './Components/PlaylistPlayer';


interface Props {
    
}
interface State {
    currentVideoId: string;
    IsVideoPlaying: boolean;
    IsLoadingVideo: boolean;
    LoadingText: string;
    playlist: string[];
}

export default class App extends Component<Props, State> {
    state = {
        currentVideoId: '',
        IsVideoPlaying: false,
        IsLoadingVideo: true,
        LoadingText: '',
        playlist: []
    }
    private _playlistRetriever: YTPlaylistRetriever;
    private _playlistId: string;

    constructor(props: Props) {
        super(props);
        this._playlistRetriever = new YTPlaylistRetriever(AppConfig.apiKey);

        // Use PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10 for a super super long list
        // Use PLWXWbr9ex3iVqtmHSJ0OIeEnD2hOZnp2Q for xenoblade chronicles music
        // Use PLxV_ER5SmeVYYSKfzplwqoQzmYWMEidIV for a super short list
        // Use PLaetSIDm3F73cpqVlmsQgrpX3GV_NwU1T for a sample montage list 
        let url = new URL(window.location.href);
        this._playlistId = url.searchParams.get('list') ?? AppConfig.playlistId ?? '';
        this.state.LoadingText = url.searchParams.get('loadingText') ?? AppConfig.loadingText ?? '';
    }

    componentDidMount() {
        this.onMount();
    }

    async onMount() {
        if (!this._playlistId) return;

        try {
            let temp = await this._playlistRetriever.GetPlaylistVideoIds(this._playlistId);
            this.setState({playlist: RandomizeOrder(temp)});
        } catch (error) {
            console.error(error);
        }
    }

    onConfigFormSubmit(values: onSubmitParameters) {
        console.log(values);
        let url = new URL(window.location.href);
        url.searchParams.append('list', values.youtubeListId);
        url.searchParams.append('loadingText', values.loadingText);
        let newHref = url.href
        navigator.clipboard.writeText(newHref);
        alert(`The link has been copied to your clipboard. Redirecting you to your new page.`);
        window.location.href = url.href;
    }

    render() {
        return (
            <div style={{height: 'inherit'}}>
                {this.state.playlist.length > 0 
                    ? <PlaylistPlayer playlist={this.state.playlist} loadingText={this.state.LoadingText} /> 
                    : <ConfigForm YoutubeApiKey={AppConfig.apiKey} onSubmit={values => this.onConfigFormSubmit(values)} />}
            </div>
        );
    } 
}
