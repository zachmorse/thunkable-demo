import {
    INITIALIZE_DRAFT,
    UPDATE_DRAFT,
    ADD_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    INITIALIZE_PROJECT_UPDATE,
    INITIALIZE_PROJECT_DELETE,
    DECLINE_PROJECT_DELETE
} from './actionTypes'

import store from '../store'

export const createProjectDraft = () => ({ type: INITIALIZE_DRAFT })
export const updateProjectDraft = (title: string) => ({ type: UPDATE_DRAFT, payload: title })
export const addProject = (title: string) => {
    const id = store.getState().list.newProjectId
    const created = new Date().getTime()
    const newProject = { title, id, created }

    return { type: ADD_PROJECT, payload: newProject }
}
export const initializeProjectUpdate = (projectId: number) => ({ type: INITIALIZE_PROJECT_UPDATE, payload: projectId })
export const updateProject = () => ({ type: UPDATE_PROJECT })
export const initializeProjectDelete = (id: number) => ({ type: INITIALIZE_PROJECT_DELETE, payload: id })
export const declineProjectDelete = () => ({ type: DECLINE_PROJECT_DELETE })
export const deleteProject = () => ({ type: DELETE_PROJECT })
