import React, { Fragment, useState } from 'react'
import { Form, Formik } from 'formik';
import { IPlaylist } from '../Interfaces/YTInterfaces'
import { Button, Box, useTheme, Paper, Typography, Grid } from '@material-ui/core';
import YoutubePlaylistSnippet from './YoutubePlaylistSnippet';
import { GetPlaylistObject, ValidateImageLink } from '../Utilities/Utilities';
import { useHistory } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import JumpToBRBDialog from './JumpToBRBDialog';
import FormikTextField, { FormikTextFieldProps } from './FormikTextField';
import FormikCheckbox, { FormikCheckboxProps } from './FormikCheckbox';
import FormikSlider from './FormikSlider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


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

        let errorMessage = await ValidateImageLink(imageLink);
        if (errorMessage) {
            setImageLink('');
            return errorMessage;
        }

        setImageLink(imageLink);
        return '';
    }

    return (
        <Box style={{...center}} >
            <Box style={{width: '30%'}}>
                <img src={imageLink} alt='' style={{maxWidth: '100%', maxHeight: '100%', margin: 'auto', width:'auto', height:'auto'}} />
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
                    imageLink: '',
                    beepVolume: 10,
                    videoVolume: 100,
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let url = new URL(window.location.origin);
                    url.pathname = `${process.env.PUBLIC_URL}/BRB`
                    url.searchParams.append('list', values.youtubeListId);
                    url.searchParams.append('loadingText', values.loadingText);
                    url.searchParams.append('showYTControls', values.showYTControls ? '1' : '0');
                    url.searchParams.append('randomizeOrder', values.randomizeOrder ? '1' : '0');
                    url.searchParams.append('brbImage', values.imageLink);
                    url.searchParams.append('beepVolume', values.beepVolume.toString());
                    url.searchParams.append('videoVolume', values.videoVolume.toString());

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
                        <Form>
                            <StyledFormikTextField
                                name='youtubeListId'
                                validate={validateYTPlaylistID}
                                textFieldProps={{
                                    label: 'Youtube Playlist ID',
                                    helperText: 'Enter a youtube playlist ID',
                                    disabled: formik.isSubmitting
                                }}
                            />
                            <StyledFormikTextField 
                                name='loadingText'
                                textFieldProps={{
                                    label: 'Loading Text',
                                    helperText: 'The text to display while loading the next video in the playlist',
                                    disabled: formik.isSubmitting
                                }}
                            />
                            <StyledFormikTextField 
                                name='imageLink'
                                validate={validateImageLink}
                                textFieldProps={{
                                    label: 'BRB Image Link',
                                    helperText: 'The image to display while loading the next video in the playlist',
                                    disabled: formik.isSubmitting
                                }}
                            />
                            <br />
                            <br />
                            <StyledVolumeSlider name='beepVolume' label='Beep volume' />
                            <br />
                            <StyledVolumeSlider name='videoVolume' label='Video volume' />
                            <br />
                            <StyledFormikCheckbox
                                name='showYTControls'
                                FormControlLabelProps={{label:'Show Youtube controls'}}
                                CheckboxProps={{disabled:formik.isSubmitting}}
                            />
                            <br />
                            <StyledFormikCheckbox
                                name='randomizeOrder'
                                FormControlLabelProps={{label:'Randomize playlist order'}}
                                CheckboxProps={{disabled:formik.isSubmitting}}
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
                        </Form>
                        </Paper>
                    )
                }}
            </Formik>
            <YoutubePlaylistSnippet playlist={currentPlaylist} style={{width: '30%', padding: '1em'}} />
        </Box>
    )
}

let StyledFormikTextField = ({textFieldProps, ...otherProps}: FormikTextFieldProps) => {
    // https://github.com/mui-org/material-ui/issues/15697
    // I'm doing this funny business here because of a typescript bug
    textFieldProps.variant = textFieldProps.variant ?? 'outlined' as any;
    textFieldProps.fullWidth = textFieldProps.fullWidth ?? true;
    textFieldProps.margin = textFieldProps.margin ?? 'normal';

    return (
        <FormikTextField 
            textFieldProps={textFieldProps}
            {...otherProps}
        />
    );
}


let StyledFormikCheckbox = (props: FormikCheckboxProps) => {
    const theme = useTheme();

    let checkboxFormStyle: React.CSSProperties = {
        backgroundColor: theme.palette.background.paper, 
        color: theme.palette.text.primary
    }

    props.FormControlLabelProps.style = {...checkboxFormStyle};
    if (!props.CheckboxProps) props.CheckboxProps = {};
    props.CheckboxProps.color = "secondary";

    return (
        <FormikCheckbox
            {...props}
        />
    );
}

interface StyledVolumeSliderProps {
    label?: string,
    name: string
}
let StyledVolumeSlider = (props: StyledVolumeSliderProps) => {
    return (
        <Fragment>
            <Typography gutterBottom>{props.label}</Typography>
            <Grid container spacing={2} style={{width: '25%', minWidth:'300px'}}>
                <Grid item><VolumeDown /></Grid>
                <Grid item xs>
                    <FormikSlider
                        name={props.name}
                        SliderProps={{
                            min: 0,
                            max: 100,
                            valueLabelDisplay: 'auto',
                            color: 'secondary'
                        }}
                    />
                </Grid>
                <Grid item><VolumeUp /></Grid>
            </Grid>
        </Fragment>
    );
}