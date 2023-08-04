import { ADD_PROJECT, CREATE_PROJECT_DRAFT } from '../actions/actionTypes'

const initialState = {
    projects: [],
    draftPanelOpen: false,
    draftItem: ''
}

const listReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_PROJECT_DRAFT:
            return { ...state, draftPanelOpen: true }
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload], draftPanelOpen: false }

        default:
            return state
    }
}

export default listReducer
