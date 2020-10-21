import React, { ReactElement } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Config from './Components/Config';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BRB from './Components/BRB';
import PageNotFound from './Components/PageNotFound';

const REACT_APP_YT_API_KEY = process.env.REACT_APP_YT_API_KEY ?? '';


interface Props {
}

// eslint-disable-next-line no-empty-pattern
export default function App({ }: Props): ReactElement {
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path='/brb' render={(props) => (<BRB YoutubeApiKey={REACT_APP_YT_API_KEY} {...props}/>)} />
                    <Route path='/config'>
                        <Config YoutubeApiKey={REACT_APP_YT_API_KEY} />
                    </Route>
                    <Route path='/' exact>
                        <Redirect to='/config' />
                    </Route>
                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

