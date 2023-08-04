import React, { useState } from 'react'
import { Icon } from '@mui/material'
import styled from '@emotion/styled'

interface iIconButton {
    primaryIcon: any
    altIcon: any
    clickAction: () => void
}

const StyledImg = styled.img({
    position: 'relative',
    top: 2
})

const CustomIconButton = ({ primaryIcon, altIcon, clickAction }: iIconButton) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Icon onClick={clickAction}>
                <StyledImg src={hovered ? altIcon : primaryIcon}></StyledImg>
            </Icon>
        </div>
    )
}

export default CustomIconButton
