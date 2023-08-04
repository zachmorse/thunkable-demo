import React, { forwardRef } from 'react'
import { Button, Dialog, DialogActions, Slide } from '@mui/material'
import styled from '@emotion/styled'
import { TransitionProps } from '@mui/material/transitions'

import QuestionLogo from '../assets/Question.svg'

interface iConfirmationDialog {
    open: boolean
    primaryAction: () => void
    secondaryAction: () => void
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction='down' ref={ref} {...props} />
})

const DialogContentArea = styled.div({
    margin: '2rem 1rem 0.5rem 1rem'
})

const InfoAndLogo = styled.div({
    display: 'flex',

    marginBottom: '2rem',
    flexDirection: 'column'
})

const StyledImg = styled.img({
    width: 24
})

const Title = styled.h2({
    fontSize: '1rem',
    display: 'flex',
    gap: '0.5rem',
    margin: '0rem'
})

const Subtitle = styled.h4({
    margin: 0,
    fontSize: '0.75rem',
    color: 'rgba(0,0,0,0.5)',
    fontWeight: 400,
    display: 'flex',
    gap: '0.5rem'
})

const Spacer = styled.span({
    width: 24
})

const ConfirmationDialog = ({ open, primaryAction, secondaryAction }: iConfirmationDialog) => {
    const handleClose = () => secondaryAction()

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            hideBackdrop
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
        >
            <DialogContentArea>
                <InfoAndLogo>
                    {/* <span> */}
                    <Title>
                        <StyledImg src={QuestionLogo}></StyledImg>
                        <span>Are you sure you want to delete this project?</span>
                    </Title>
                    <Subtitle>
                        <Spacer />
                        <span>This action cannot be undone.</span>
                    </Subtitle>
                    {/* </span> */}
                </InfoAndLogo>
                <DialogActions>
                    <Button variant='outlined' onClick={() => secondaryAction()}>
                        No
                    </Button>
                    <Button variant='contained' color='primary' onClick={() => primaryAction()}>
                        Yes
                    </Button>
                </DialogActions>
            </DialogContentArea>
        </Dialog>
    )
}

export default ConfirmationDialog
