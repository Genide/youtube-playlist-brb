import React, { Component } from 'react'
import { Formik } from 'formik';
import { IPlaylist } from '../Interfaces/YTInterfaces'
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import YoutubePlaylistSnippet from './YoutubePlaylistSnippet';
import { GetPlaylistObject } from '../Utilities/Utilities';

interface Props {
    YoutubeApiKey: string,
    onSubmit: IOnSubmit
}
interface State {
    currentPlaylist?: IPlaylist;
}

interface IOnSubmit {
    (values: onSubmitParameters): void
}

export interface onSubmitParameters {
    youtubeListId: string,
    loadingText: string,
    showYTControls: boolean,
    randomizeOrder: boolean
}

export default class ConfigForm extends Component<Props, State> {
    static defaultProps = {
        onSubmit: () => { }
    }

    state: State = {}

    private async getYTList(YTListId: string): Promise<IPlaylist | undefined> {
        return await GetPlaylistObject(YTListId, this.props.YoutubeApiKey, true);
    }

    render() {
        return (
            <div style={{ display: "flex", padding: '1em' }}>
                <Formik
                    initialValues={{
                        youtubeListId: '',
                        loadingText: 'BE RIGHT BACK!',
                        showYTControls: false,
                        randomizeOrder: true
                    }}
                    validate={async values => {
                        const errors: any = {};
                        if (!values.youtubeListId) {
                            errors.youtubeListId = 'Required';
                        } else {
                            let temp = await this.getYTList(values.youtubeListId);
                            if (!temp) {
                                errors.youtubeListId = 'Invalid playlist ID'
                            }
                            this.setState({ currentPlaylist: temp });
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.props.onSubmit(values);
                        setSubmitting(false);
                    }}
                    validateOnChange={false}
                >
                    {(formik) => {
                        return (
                            <form onSubmit={formik.handleSubmit} style={{ borderStyle: 'groove', borderWidth: '5px', padding: '1em', width: '25%', minWidth: '500px' }}>
                                <TextField
                                    label='Youtube Playlist ID'
                                    value={formik.values.youtubeListId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='youtubeListId'
                                    error={formik.errors.youtubeListId ? true : false}
                                    helperText={formik.errors.youtubeListId ?? 'Enter a youtube playlist ID'}
                                    fullWidth
                                    disabled={formik.isSubmitting}
                                />
                                <br />
                                <br />
                                <TextField
                                    label='Loading Text'
                                    value={formik.values.loadingText}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='loadingText'
                                    error={formik.errors.loadingText ? true : false}
                                    helperText={formik.errors.loadingText ?? 'Displayed while loading the next video in the playlist'}
                                    fullWidth
                                    disabled={formik.isSubmitting}
                                />
                                <br />
                                <br />
                                <FormControlLabel 
                                    label="Show Youtube Controls"
                                    control={<Checkbox 
                                        checked={formik.values.showYTControls}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="showYTControls"
                                        disabled={formik.isSubmitting}
                                    />}
                                />
                                <FormControlLabel 
                                    label="Randomize playlist order"
                                    control={<Checkbox 
                                        checked={formik.values.randomizeOrder}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="randomizeOrder"
                                        disabled={formik.isSubmitting}
                                    />}
                                />
                                
                                <br />
                                <br />
                                <Button type='submit' variant='outlined' disabled={formik.isSubmitting}>
                                    Create Link
                                </Button>
                            </form>
                        )
                    }}
                </Formik>
                <YoutubePlaylistSnippet playlist={this.state.currentPlaylist} />
            </div>
        )
    }
}
