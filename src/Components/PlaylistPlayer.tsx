import React, { Component, Fragment } from 'react'
import YTPlayer, { Options } from 'react-youtube';
import Beeper from '../Controller/Beeper';
import TestPattern from './TestPattern'

interface Props {
    playlist: string[];
    loadingText: string;
    showYTControls: boolean;
    brbImageLink: string;
    beepVolume: number;
}
interface State {
    currentVideoId: string;
    IsVideoPlaying: boolean;
    IsLoadingVideo: boolean;
}

export default class PlaylistPlayer extends Component<Props, State> {
    static defaultProps = {
        playlist: [],
        loadingText: '',
        showYTControls: false,
        brbImageLink: '',
        beepVolume: 10
    }
    state: State = {
        currentVideoId: '',
        IsVideoPlaying: false,
        IsLoadingVideo: true
    }
    private _beeper: Beeper;
    private _currentVideoIndex: number;

    constructor(props: Props) {
        super(props);
        this._beeper = new Beeper(props.beepVolume * .01);
        this._currentVideoIndex = 0;
    }

    componentDidMount() {
        this.loadCurrentPlaylistVideo();
    }

    onPlayerStart() {
        this.setState({
            IsVideoPlaying: true,
            IsLoadingVideo: false
        });
        this._beeper.StopBeep();
    }

    loadNextPlaylistVideo() {
        this._currentVideoIndex++;
        this.loadCurrentPlaylistVideo();
    }

    loadCurrentPlaylistVideo() {
        let newState = {
            IsVideoPlaying: false,
            IsLoadingVideo: false,
            currentVideoId: ''
        }
        if (this._currentVideoIndex < this.props.playlist.length) {
            newState.currentVideoId = this.props.playlist[this._currentVideoIndex];
            newState.IsLoadingVideo = true;
            this._beeper.StartBeep();
        }

        this.setState(newState);
    }

    render() {
        if (this.props.playlist.length === 0) return <Fragment />

        const YTPlayerOpts: Options = {
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 1,
                controls: this.props.showYTControls ? 1 : 0, // Hide the player controls
                fs: 0, // Hide the fullscreen button
                rel: 0, // Disable showing related videos after a video is finished playing
                modestbranding: 1
            }
        }

        return (
            <div style={{height: 'inherit'}}>
                <div hidden={!this.state.IsVideoPlaying} style={{height: 'inherit'}}>
                    <YTPlayer
                        containerClassName='YTPlayerContainer'
                        videoId={this.state.currentVideoId}
                        opts={YTPlayerOpts}
                        onPlay={() => this.onPlayerStart()}
                        onEnd={() => this.loadNextPlaylistVideo()}
                    />
                </div>
                <TestPattern 
                    hidden={!this.state.IsLoadingVideo} 
                    text={this.props.loadingText}
                    brbImageLink={this.props.brbImageLink}/>
            </div>
        )
    }
}
