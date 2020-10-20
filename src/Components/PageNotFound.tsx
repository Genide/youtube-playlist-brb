import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

interface Props {
    
}

// eslint-disable-next-line no-empty-pattern
export default function PageNotFound({}: Props): ReactElement {
    const history = useHistory();

    let onClick = () => {
        history.push('/config');
    }

    let center: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }

    return (
        <div style={center}>
            <h2 style={{textAlign: 'center'}}>
                Page not found. Click the button to go to the configuration page.
            </h2>
            <div>
                <Button onClick={onClick} variant='outlined'>Go to Configuration Page</Button>
            </div>
        </div>
    )
}
