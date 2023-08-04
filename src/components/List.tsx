import React from 'react'
import { connect } from 'react-redux'
import ProjectItem from './ProjectItem'

import { iProjectItem } from '../types'

interface iProjectList {
    projects: iProjectItem[]
    draftPanelOpen: boolean
}

const List = ({ projects, draftPanelOpen }: iProjectList) => {
    return (
        <div>
            {draftPanelOpen ? <ProjectItem isDraft /> : null}
            {projects.length ? (
                <>
                    {projects.map((x, idx) => (
                        <ProjectItem key={idx} item={x} />
                    ))}
                </>
            ) : null}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    projects: state.list.projects,
    draftPanelOpen: state.list.draftPanelOpen
})

export default connect(mapStateToProps)(List)
