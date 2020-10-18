import React, { Component } from 'react'
import TestPatternImage from './SMPTE_Color_Bars.svg'

interface Props {
    hidden: boolean,
    text: string,
}
interface State {
    
}

export default class TestPattern extends Component<Props, State> {
    static defaultProps = {
        hidden: false,
        text: ""
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

        return (
            <div style={{...containerStyle, display: this.props.hidden ? "none": "flex"}}>
                <img src={TestPatternImage} alt="" style={{width: '100%'}} />
                <div style={overlayTextStyle}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
