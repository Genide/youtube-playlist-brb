import React, { Component } from 'react'
import TestPatternImage from './SMPTE_Color_Bars.svg'

interface Props {
    hidden: boolean,
    text: string,
    brbImageLink: string
}
interface State {
    
}

export default class TestPattern extends Component<Props, State> {
    static defaultProps = {
        hidden: false,
        text: '',
        brbImageLink: ''
    }
    
    state = {}

    render() {
        let containerStyle: React.CSSProperties = {
            width: '100%',
            height: '100%',
        }

        let overlayTextStyle: React.CSSProperties = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            fontSize: '150px',
            color: "white",
            transform: 'translate(-50%,-50%)',
            backgroundColor: "black",
            textAlign: 'center'
        }

        let brbImageLink = (this.props.brbImageLink) ? this.props.brbImageLink : TestPatternImage;
        let imageStyle: React.CSSProperties = (this.props.brbImageLink) 
                            ? {maxWidth: '100%', maxHeight: '100%', margin: 'auto', width:'auto', height:'auto'}
                            : {width: '100%'}

        return (
            <div style={{...containerStyle, display: this.props.hidden ? "none": "flex"}}>
                <img src={brbImageLink} alt="" style={imageStyle} />
                <div style={overlayTextStyle}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
