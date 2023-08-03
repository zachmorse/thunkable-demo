import React from 'react'
import styled from '@emotion/styled'

import Beaver from '../assets/ThunkableBeaver.png'
import PlusSign from '../assets/plus_sign.svg'

const Banner = styled.div({
    backgroundColor: '#F7F9FD',
    fontSize: '1rem',
    color: '#424242',
    width: '100%',
    padding: '0rem 2rem 1rem 89px',
    textTransform: 'uppercase',
    height: '7.75rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr'
})

const LogoContainer = styled.div({
    width: '2rem',
    height: '2rem'
})

const AppTitle = styled.div({
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: '0rem 0rem 1rem 1rem',
    letterSpacing: '0.8 px',
    gridRow: 2
})

const Header = () => {
    return (
        <Banner>
            <LogoContainer>
                {/* <img src={Beaver} /> */}
                <img src={PlusSign} />
            </LogoContainer>
            <AppTitle>My Projects</AppTitle>
        </Banner>
    )
}

export default Header
