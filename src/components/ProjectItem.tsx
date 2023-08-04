import React from 'react'

interface iProjectItem {
    isDraft: boolean
}

const ProjectItem = ({ isDraft = false }: iProjectItem) => {
    return <div>{isDraft ? <div>new item</div> : <div>NORML ITEM</div>}</div>
}

export default ProjectItem
