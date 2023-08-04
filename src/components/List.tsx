import React from 'react'
import { connect } from 'react-redux'
import ProjectItem from './ProjectItem'

interface iProjectList {
    projects: string[]
    draftPanelOpen: boolean
}

const List = ({ projects, draftPanelOpen }: iProjectList) => {
    return (
        <div>
            {draftPanelOpen ? <ProjectItem isDraft /> : null}
            {projects.length ? (
                <ul>
                    {projects.map((x, idx) => (
                        <li key={idx}>{x}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    projects: state.list.projects,
    draftPanelOpen: state.list.draftPanelOpen
})

export default connect(mapStateToProps)(List)
