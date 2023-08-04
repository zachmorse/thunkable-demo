import { CREATE_PROJECT_DRAFT, ADD_PROJECT, UPDATE_PROJECT_TITLE, DELETE_PROJECT } from './actionTypes'

export const createProjectDraft = () => ({ type: CREATE_PROJECT_DRAFT })
export const addProject = (item: string) => ({ type: ADD_PROJECT, payload: item })
export const deleteProject = (id: number) => ({ type: DELETE_PROJECT, payload: id })
