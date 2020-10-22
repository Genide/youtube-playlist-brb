import React, { useState } from 'react'
import { Formik } from 'formik';
import { IPlaylist } from '../Interfaces/YTInterfaces'
import { Button, Checkbox, FormControlLabel, TextField, Box, useTheme, Paper } from '@material-ui/core';
import YoutubePlaylistSnippet from './YoutubePlaylistSnippet';
import { GetPlaylistObject } from '../Utilities/Utilities';
import { useHistory } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import JumpToBRBDialog from './JumpToBRBDialog';

interface Props {
    YoutubeApiKey: string,
}

const getYTList = async (YTListId: string, YTApiKey: string): Promise<IPlaylist | undefined> => {
    return await GetPlaylistObject(YTListId, YTApiKey, true);
}

export default function Config({YoutubeApiKey}: Props) {
    const [currentPlaylist, setcurrentPlaylist] = useState({} as IPlaylist);
    const [isDialogOpen, setisDialogOpen] = useState(false);
    const [queryString, setqueryString] = useState('');
    const theme = useTheme();
    const history = useHistory();

    let jumpToBrb = () => {
        if (!queryString) return;

        history.push(`/BRB${queryString}`)
    }

    let center: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: theme.palette.background.default,
        paddingLeft: '2em',
        paddingRight: '2em'
    }

    let checkboxFormStyle: React.CSSProperties = {
        backgroundColor: theme.palette.background.paper, 
        color: theme.palette.text.primary
    }

    return (
        <Box style={{...center}} >
            <JumpToBRBDialog 
                style={{width: '30%'}} 
                onJumpToBrb={jumpToBrb}
                open={isDialogOpen}
                onClose={() => setisDialogOpen(false)}
            />
            <Formik
                initialValues={{
                    youtubeListId: '',
                    loadingText: '',
                    showYTControls: false,
                    randomizeOrder: false
                }}
                validate={async values => {
                    const errors: any = {};
                    if (!values.youtubeListId) {
                        errors.youtubeListId = 'Required';
                        setcurrentPlaylist({} as IPlaylist);
                    } else {
                        let temp = await getYTList(values.youtubeListId, YoutubeApiKey);
                        if (!temp) {
                            errors.youtubeListId = 'Invalid playlist ID'
                            setcurrentPlaylist({} as IPlaylist);
                        } else {
                            setcurrentPlaylist(temp);
                        }
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let url = new URL(window.location.origin);
                    url.pathname = `${process.env.PUBLIC_URL}/BRB`
                    url.searchParams.append('list', values.youtubeListId);
                    url.searchParams.append('loadingText', values.loadingText);
                    url.searchParams.append('showYTControls', values.showYTControls ? '1' : '0');
                    url.searchParams.append('randomizeOrder', values.randomizeOrder ? '1' : '0');

                    setqueryString(url.search);
                    navigator.clipboard.writeText(url.href);
                    setisDialogOpen(true);
                    setSubmitting(false);
                }}
                validateOnChange={false}
            >
                {(formik) => {
                    return (
                        <Paper 
                            elevation={3}
                            style={{ padding: '1em', width: '30%', minWidth: '450px', margin: 'auto'}}
                        >
                        <form onSubmit={formik.handleSubmit} style={{  }}>
                            <TextField
                                variant='outlined'
                                label='Youtube Playlist ID'
                                value={formik.values.youtubeListId}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='youtubeListId'
                                error={formik.errors.youtubeListId ? true : false}
                                helperText={formik.errors.youtubeListId ?? 'Enter a youtube playlist ID'}
                                fullWidth
                                disabled={formik.isSubmitting}
                                margin='normal'
                            />
                            <TextField
                                variant='outlined'
                                label='Loading Text'
                                value={formik.values.loadingText}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='loadingText'
                                error={formik.errors.loadingText ? true : false}
                                helperText={formik.errors.loadingText ?? 'Displayed while loading the next video in the playlist'}
                                fullWidth
                                disabled={formik.isSubmitting}
                                margin='normal'
                            />
                            <FormControlLabel
                                label="Show Youtube Controls"
                                style={{ ...checkboxFormStyle }}
                                control={<Checkbox 
                                    checked={formik.values.showYTControls}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="showYTControls"
                                    disabled={formik.isSubmitting}
                                    color='primary'
                                />}
                            />
                            <br />
                            <FormControlLabel 
                                label="Randomize playlist order"
                                style={{ ...checkboxFormStyle }}
                                control={<Checkbox 
                                    checked={formik.values.randomizeOrder}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="randomizeOrder"
                                    disabled={formik.isSubmitting}
                                    color='primary'
                                />}
                            />
                            
                            <br />
                            <br />
                            <Button 
                                type='submit' 
                                variant='outlined' 
                                disabled={formik.isSubmitting} 
                                style={{float: 'right'}}
                                startIcon={<CreateIcon />}
                            >
                                Create Link
                            </Button>
                        </form>
                        </Paper>
                    )
                }}
            </Formik>
            <YoutubePlaylistSnippet playlist={currentPlaylist} style={{width: '30%', padding: '1em'}} />
        </Box>
    )
}

