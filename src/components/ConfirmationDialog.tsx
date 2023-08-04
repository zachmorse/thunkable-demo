import React, { forwardRef } from 'react'
import { Button, Dialog, DialogActions, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

interface iConfirmationDialog {
    open: boolean
    primaryAction: () => void
    secondaryAction: () => void
}

const ConfirmationDialog = ({ open, primaryAction, secondaryAction }: iConfirmationDialog) => {
    const Transition = forwardRef(function Transition(
        props: TransitionProps & { children: React.ReactElement<any, any> },
        ref: React.Ref<unknown>
    ) {
        return <Slide direction='down' ref={ref} {...props} />
    })

    const handleClose = () => secondaryAction()

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
        >
            <h1>Are you sure you want to delete this project?</h1>
            <div>This action cannot be undone.</div>
            <DialogActions>
                <Button variant='outlined' onClick={secondaryAction}>
                    No
                </Button>
                <Button variant='outlined' onClick={primaryAction}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationDialog
