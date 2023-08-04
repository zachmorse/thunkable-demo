import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import {
    addProject,
    updateProjectDraft,
    initializeProjectUpdate,
    updateProject,
    initializeProjectDelete
} from '../store/actions/list'
import { TextField } from '@mui/material'

import Beaver from '../assets/ThunkableBeaver.png'

const ProjectContainer = styled.div({
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '2rem 1fr 1fr 1fr 1fr',
    width: '100%',
    maxWidth: '50rem',
    height: 70,
    margin: 'auto',
    backgroundColor: '#fff',
    padding: '0rem 1rem',
    gap: '1rem',
    border: '1px solid deeppink' // ZCM
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

// const StyledTextField = styled(TextField)

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
            <LogoContainer>
                <Logo />
            </LogoContainer>

            {isDraft && (
                <Form
                    onSubmit={e => {
                        e.preventDefault()
                        addProject(draftItem)
                    }}
                >
                    <TextField
                        size='small'
                        value={draftItem}
                        placeholder='Name your project'
                        onChange={e => updateProjectDraft(e.target.value)}
                    />
                </Form>
            )}

            {!isDraft && (
                <>
                    {projectStagedForUpdate === item.id ? (
                        <Form
                            onSubmit={e => {
                                e.preventDefault()
                                updateProject()
                            }}
                        >
                            <TextField
                                size='small'
                                value={draftItem}
                                placeholder='Name your project'
                                onChange={e => updateProjectDraft(e.target.value)}
                            />
                        </Form>
                    ) : (
                        <div>{item.title}</div>
                    )}
                    <button onClick={() => initializeProjectUpdate(item.id)}>Icon Update</button>
                    <div>{item.created}</div>
                    <button onClick={() => initializeProjectDelete(item.id)}>Icon Delete</button>
                </>
            )}
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
