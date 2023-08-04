import React from 'react'
import { connect } from 'react-redux'

import './styles/App.css'

import Header from './components/Header'
import List from './components/List'
import ConfirmationDialog from './components/ConfirmationDialog'

import { declineProjectDelete, deleteProject } from './store/actions/list'

interface iApp {
    projectStagedForDelete: number | null
    declineProjectDelete: () => void
    deleteProject: () => void
}

const App = ({ projectStagedForDelete, declineProjectDelete, deleteProject }: iApp) => {
    return (
        <div className='App'>
            <Header />
            <List />
            <ConfirmationDialog
                open={projectStagedForDelete !== null}
                primaryAction={() => deleteProject()}
                secondaryAction={() => declineProjectDelete()}
            />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    projectStagedForDelete: state.list.projectStagedForDelete
})

const mapDispatchToProps = (dispatch: any) => ({
    declineProjectDelete: () => dispatch(declineProjectDelete()),
    deleteProject: () => dispatch(deleteProject())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
