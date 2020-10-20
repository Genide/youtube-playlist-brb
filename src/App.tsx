import React, { ReactElement } from 'react'
import './App.css';
import ConfigForm from './Components/ConfigForm';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BRB from './Components/BRB';
import PageNotFound from './Components/PageNotFound';

const REACT_APP_YT_API_KEY = process.env.REACT_APP_YT_API_KEY ?? '';


interface Props {
}

// eslint-disable-next-line no-empty-pattern
export default function App({ }: Props): ReactElement {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path='/brb' render={(props) => (<BRB YoutubeApiKey={REACT_APP_YT_API_KEY} {...props}/>)} />
                <Route path='/config'>
                    <ConfigForm YoutubeApiKey={REACT_APP_YT_API_KEY} />
                </Route>
                <Route path='/' exact>
                    <Redirect to='/config' />
                </Route>
                <Route>
                    <PageNotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

