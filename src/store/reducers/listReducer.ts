import { ADD_ITEM } from '../actions/actionTypes'

const initialState = {
    items: ['stuff', 'things']
}

const listReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }
        default:
            return state
    }
}

export default listReducer
