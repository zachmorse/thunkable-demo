import React from 'react'
import { connect } from 'react-redux'

interface iProjectList {
    projects: string[]
}

const List = ({ projects }: iProjectList) => {
    return (
        <div>
            <ul>
                {projects.map((x, idx) => (
                    <li key={idx}>{x}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    projects: state.list.items
})

export default connect(mapStateToProps)(List)
