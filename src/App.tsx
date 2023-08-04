import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import Header from './components/Header'
import List from './components/List'
import ConfirmationDialog from './components/ConfirmationDialog'

import { declineProjectDelete, deleteProject } from './store/actions/list'

import { iProjectItem } from './types'

interface iApp {
    projects: iProjectItem[]
    draftPanelOpen: boolean
    projectStagedForDelete: number | null
    declineProjectDelete: () => void
    deleteProject: () => void
}

type appContainerProps = {
    useDarkBackground: boolean
}

const AppContainer = styled.div<appContainerProps>(
    {
        width: '100%',
        maxWidth: '1025px',
        margin: 'auto',
        height: 'auto',
        minHeight: '100vh'
    },
    props => ({
        backgroundColor: props.useDarkBackground ? '#F7F9FD' : 'inherit'
    })
)

const App = ({ projects, draftPanelOpen, projectStagedForDelete, declineProjectDelete, deleteProject }: iApp) => {
    return (
        <AppContainer useDarkBackground={Boolean(projects.length || draftPanelOpen)}>
            <Header />
            <List />
            <ConfirmationDialog
                open={projectStagedForDelete !== null}
                primaryAction={deleteProject}
                secondaryAction={declineProjectDelete}
            />
        </AppContainer>
    )
}

const mapStateToProps = (state: any) => ({
    projects: state.list.projects,
    draftPanelOpen: state.list.draftPanelOpen,
    projectStagedForDelete: state.list.projectStagedForDelete
})

const mapDispatchToProps = (dispatch: any) => ({
    declineProjectDelete: () => dispatch(declineProjectDelete()),
    deleteProject: () => dispatch(deleteProject())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
