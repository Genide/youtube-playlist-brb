import { Box, Button, Dialog, DialogContent, DialogTitle, ModalProps } from '@material-ui/core'
import CallMade from '@material-ui/icons/CallMade';
import React, { ReactElement } from 'react'

interface Props {
    onJumpToBrb: IOnJumpToBrb,
    style: React.CSSProperties,
    open: boolean,
    onClose?: ModalProps['onClose']
}

interface IOnJumpToBrb {
    (): void
}

JumpToBRBDialog.defaultProps = {
    open: false,
    onJumpToBrb: () => {}
}

export default function JumpToBRBDialog({onJumpToBrb, style, open, onClose}: Props): ReactElement {
    return (
        <Box style={{...style}}>
            <Dialog
                open={open}
                onClose={onClose}
            >
                <DialogTitle>Link has been created</DialogTitle>
                <DialogContent>
                    <Box>The link has been copied to your clipboard. Click the button below to go to your new BRB page.</Box>
                    <br />
                    <Button 
                        variant='outlined' 
                        style={{ float: "right" }} 
                        onClick={onJumpToBrb}
                        startIcon={<CallMade />}
                    >
                        JUMP TO BRB
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
