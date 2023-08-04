import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'

import {
    addProject,
    updateProjectDraft,
    initializeProjectUpdate,
    updateProject,
    initializeProjectDelete
} from '../store/actions/list'

import { formatUnixTimestamp } from '../utils'

import CustomIconButton from './CustomIconButton'

import Beaver from '../assets/ThunkableBeaver.png'
import editIcon from '../assets/EditIcon.svg'
import editIconHover from '../assets/EditIcon_Hover.svg'
import deleteIcon from '../assets/DeleteIcon.svg'
import deleteIconHover from '../assets/DeleteIcon_Hover.svg'

const ProjectContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '50rem',
    height: 70,
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '0rem 1rem',
    gap: '1rem',
    border: '1px solid rgba(0,0,0,0.1)',
    borderBottom: 'none',
    '&:last-child': {
        border: '1px solid rgba(0,0,0,0.1)'
    },

    '@media (max-width: 872px)': {
        width: 'calc(90% - 2rem)',
        margin: 'auto',
        padding: '0rem 1rem'
    }
})

const LeftContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    gap: '1rem'
})

const RightContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
})

const LogoContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const Logo = styled.div({
    width: '2rem',
    height: '2rem',
    backgroundImage: `url(${Beaver})`,
    backgroundSize: 'contain'
})

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
})

const TextFieldContainer = styled.div({
    width: '11.75rem'
})

const ProjectTitle = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1.25rem'
})

const TimeStamp = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.5)'
})

const EditIconContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
})

const DeleteIconContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
})

interface iProjectItem {
    isDraft?: boolean
    draftItem: string
    updateProjectDraft: (title: string) => void
    addProject: (title: string) => void
    item?: any
    projectStagedForUpdate: null | number
    initializeProjectUpdate: (projectId: number) => void
    updateProject: () => void
    initializeProjectDelete: (id: number) => void
}

const ProjectItem = ({
    isDraft = false,
    draftItem,
    updateProjectDraft,
    addProject,
    item,
    projectStagedForUpdate,
    initializeProjectUpdate,
    updateProject,
    initializeProjectDelete
}: iProjectItem) => {
    return (
        <ProjectContainer>
            <LeftContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                {isDraft ? (
                    <Form
                        onSubmit={e => {
                            e.preventDefault()
                            addProject(draftItem)
                        }}
                    >
                        <TextFieldContainer>
                            <TextField
                                size='small'
                                value={draftItem}
                                placeholder='Name your project'
                                onChange={e => updateProjectDraft(e.target.value)}
                            />
                        </TextFieldContainer>
                    </Form>
                ) : projectStagedForUpdate === item.id ? (
                    <Form
                        onSubmit={e => {
                            e.preventDefault()
                            updateProject()
                        }}
                    >
                        <TextFieldContainer>
                            <TextField
                                size='small'
                                value={draftItem}
                                placeholder='Update project'
                                onChange={e => updateProjectDraft(e.target.value)}
                            />
                        </TextFieldContainer>
                    </Form>
                ) : (
                    <ProjectTitle>
                        <span>{item.title}</span>
                    </ProjectTitle>
                )}
                {!isDraft ? (
                    <EditIconContainer>
                        <CustomIconButton
                            clickAction={() => initializeProjectUpdate(item.id)}
                            primaryIcon={editIcon}
                            altIcon={editIconHover}
                        />
                    </EditIconContainer>
                ) : null}
            </LeftContainer>
            <RightContainer>
                {!isDraft && (
                    <>
                        <TimeStamp>
                            <span>{formatUnixTimestamp(item.created)}</span>
                        </TimeStamp>

                        <DeleteIconContainer>
                            <CustomIconButton
                                clickAction={() => initializeProjectDelete(item.id)}
                                primaryIcon={deleteIcon}
                                altIcon={deleteIconHover}
                            />
                        </DeleteIconContainer>
                    </>
                )}
            </RightContainer>
        </ProjectContainer>
    )
}

const mapStateToProps = (state: any) => ({
    draftItem: state.list.draftItem,
    projectStagedForUpdate: state.list.projectStagedForUpdate
})

const mapDispatchToProps = (dispatch: any) => ({
    updateProjectDraft: (title: string) => dispatch(updateProjectDraft(title)),
    addProject: (title: string) => dispatch(addProject(title)),
    initializeProjectUpdate: (projectId: number) => dispatch(initializeProjectUpdate(projectId)),
    updateProject: () => dispatch(updateProject()),
    initializeProjectDelete: (id: number) => dispatch(initializeProjectDelete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem)
