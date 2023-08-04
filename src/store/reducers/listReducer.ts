import {
    ADD_PROJECT,
    DECLINE_PROJECT_DELETE,
    DELETE_PROJECT,
    INITIALIZE_DRAFT,
    INITIALIZE_PROJECT_DELETE,
    INITIALIZE_PROJECT_UPDATE,
    UPDATE_DRAFT,
    UPDATE_PROJECT
} from '../actions/actionTypes'
import { iPayload, iProjectItem } from '../../types'
import { sortProjectsByNewest } from '../../utils'

const initialState = {
    projects: [] as any,
    draftPanelOpen: false,
    draftItem: '',
    newProjectId: 1,
    projectStagedForUpdate: null,
    projectStagedForDelete: null
}

const listReducer = (state = initialState, action: iPayload) => {
    switch (action.type) {
        case INITIALIZE_DRAFT:
            return { ...state, draftPanelOpen: true }
        case UPDATE_DRAFT:
            return { ...state, draftItem: action.payload }
        case ADD_PROJECT:
            return {
                ...state,
                projects: sortProjectsByNewest([...state.projects, action.payload]),
                draftPanelOpen: false,
                draftItem: '',
                newProjectId: state.newProjectId + 1
            }
        case INITIALIZE_PROJECT_UPDATE:
            return {
                ...state,
                projectStagedForUpdate: action.payload,
                draftItem: state.projects.filter((x: iProjectItem) => x.id === action.payload)[0]?.title
            }
        case UPDATE_PROJECT:
            const updatedProject = state.projects.filter((x: iProjectItem) => x.id === state.projectStagedForUpdate)[0]
            const otherProjects = state.projects.filter((x: iProjectItem) => x.id !== state.projectStagedForUpdate)

            updatedProject.title = state.draftItem

            return {
                ...state,
                draftItem: '',
                projectStagedForUpdate: null,
                projects: sortProjectsByNewest([...otherProjects, updatedProject])
            }
        case INITIALIZE_PROJECT_DELETE:
            return { ...state, projectStagedForDelete: action.payload }
        case DECLINE_PROJECT_DELETE:
            return { ...state, projectStagedForDelete: null }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter((x: iProjectItem) => x.id !== state.projectStagedForDelete),
                projectStagedForDelete: null
            }

        default:
            return state
    }
}

export default listReducer
