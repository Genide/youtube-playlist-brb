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
    const [imageLink, setImageLink] = useState('');
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

    let validateYTPlaylistID = async (playlistID: string): Promise<string> => {
        if (!playlistID) {
            setcurrentPlaylist({} as IPlaylist);
            return 'Required';
        } else {
            let temp = await getYTList(playlistID, YoutubeApiKey);
            if (!temp) {
                setcurrentPlaylist({} as IPlaylist);
                return 'Invalid playlist ID';
            }

            setcurrentPlaylist(temp);
        }
        return '';
    }

    let validateImageLink = async (imageLink: string): Promise<string> => {
        if (!imageLink) {
            setImageLink('');
            return '';
        }

        try {
            let response = await fetch(imageLink);
            if (response.status !== 200) {
                setImageLink('');
                return 'Unable to load image';
            }

            let blob = await response.blob()
            let allowedBlobTypes = ['image/png', 'image/jpeg', 'image/gif'];
            if (!allowedBlobTypes.includes(blob.type))  {
                console.error(blob);
                setImageLink('');
                return 'This is not a link for an image';
            }

            setImageLink(imageLink);
            return '';
        } catch (error) {
            setImageLink('');
            return 'Unable to load image';
        }
    }

    return (
        <Box style={{...center}} >
            <Box style={{width: '30%'}}>
                <img src={imageLink} alt='' style={{maxWidth: '100%'}} />
                <JumpToBRBDialog 
                    style={{width: '30%'}} 
                    onJumpToBrb={jumpToBrb}
                    open={isDialogOpen}
                    onClose={() => setisDialogOpen(false)}
                />
            </Box>
            <Formik
                initialValues={{
                    youtubeListId: '',
                    loadingText: '',
                    showYTControls: false,
                    randomizeOrder: false,
                    imageLink: ''
                }}
                validate={async values => {
                    const errors: any = {};
                    let ytError =  await validateYTPlaylistID(values.youtubeListId);
                    if (ytError) errors.youtubeListId = ytError;

                    let imageLinkError = await validateImageLink(values.imageLink);
                    if (imageLinkError) errors.imageLink = imageLinkError;

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let url = new URL(window.location.origin);
                    url.pathname = `${process.env.PUBLIC_URL}/BRB`
                    url.searchParams.append('list', values.youtubeListId);
                    url.searchParams.append('loadingText', values.loadingText);
                    url.searchParams.append('showYTControls', values.showYTControls ? '1' : '0');
                    url.searchParams.append('randomizeOrder', values.randomizeOrder ? '1' : '0');
                    url.searchParams.append('brbImage', values.imageLink);

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
                                helperText={formik.errors.loadingText ?? 'The text to display while loading the next video in the playlist'}
                                fullWidth
                                disabled={formik.isSubmitting}
                                margin='normal'
                            />
                            <TextField
                                variant='outlined'
                                label='BRB Image Link'
                                value={formik.values.imageLink}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='imageLink'
                                error={formik.errors.imageLink ? true : false}
                                helperText={formik.errors.imageLink ?? 'The image to display while loading the next video in the playlist'}
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

