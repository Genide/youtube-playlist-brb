import React, { ReactElement } from 'react'
import './App.css';
import ConfigForm from './Components/ConfigForm';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BRB from './Components/BRB';

const REACT_APP_YT_API_KEY = process.env.REACT_APP_YT_API_KEY ?? '';


interface Props {
}

export default function App({ }: Props): ReactElement {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/brb'>
                    <BRB YoutubeApiKey={REACT_APP_YT_API_KEY} />
                </Route>
                <Route path='/config'>
                    <ConfigForm YoutubeApiKey={REACT_APP_YT_API_KEY} />
                </Route>
                <Route>
                    <Redirect to='/config' />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

