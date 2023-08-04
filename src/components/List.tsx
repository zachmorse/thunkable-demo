import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import ProjectItem from './ProjectItem'

import { iProjectItem } from '../types'

const ProjectList = styled.div({
    display: 'flex',
    flexDirection: 'column',
})
interface iProjectList {
    projects: iProjectItem[]
    draftPanelOpen: boolean
}

const List = ({ projects, draftPanelOpen }: iProjectList) => {
    return (
        <ProjectList>
            {draftPanelOpen ? <ProjectItem isDraft /> : null}
            {projects.length ? (
                <>
                    {projects.map((x, idx) => (
                        <ProjectItem key={idx} item={x} />
                    ))}
                </>
            ) : null}
        </ProjectList>
    )
}

const mapStateToProps = (state: any) => ({
    projects: state.list.projects,
    draftPanelOpen: state.list.draftPanelOpen
})

export default connect(mapStateToProps)(List)
