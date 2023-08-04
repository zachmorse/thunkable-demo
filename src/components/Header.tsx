import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { Button, Fab } from '@mui/material'

import Beaver from '../assets/ThunkableBeaver.png'
// import PlusSign from '../assets/plus_sign.svg'
import PlusSign from '../assets/PlusSign'

import { createProjectDraft } from '../store/actions/list'

const Banner = styled.div({
    backgroundColor: '#F7F9FD',
    fontSize: '1rem',
    color: '#424242',
    margin: '0rem auto 2rem',
    width: '85%',
    textTransform: 'uppercase',
    height: '7.75rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    marginBottom: '3rem',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    padding: '0rem 0.5rem'
})

const LogoContainer = styled.div({
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
        marginTop: '1rem',
        width: '2rem'
    }
})

const AppTitle = styled.div({
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '0rem 0rem 1rem 1rem',
    letterSpacing: '0.8 px',
    gridRow: 2,
    marginBottom: '0.5rem'
})

const ButtonContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex',
    gridColumn: 2,
    gridRow: 2,
    '& span': {
        position: 'relative',
        right: 20,
        top: 34
    }
})

interface iHeader {
    createProjectDraft: () => void
}

const Header = ({ createProjectDraft }: iHeader) => {
    return (
        <Banner>
            <LogoContainer>
                <img src={Beaver} />
            </LogoContainer>
            <ButtonContainer>
                <span>
                    <Fab
                        onClick={createProjectDraft}
                        sx={{
                            transition: 'all 125ms',
                            backgroundColor: '#4A475F',
                            ':hover': { backgroundColor: '#3D3A4F' }
                        }}
                    >
                        <PlusSign />
                    </Fab>
                </span>
            </ButtonContainer>

            <AppTitle>My Projects</AppTitle>
        </Banner>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    createProjectDraft: () => dispatch(createProjectDraft())
})

export default connect(null, mapDispatchToProps)(Header)
