import { ADD_ITEM } from './actionTypes'

export const AddItem = (item: string) => (dispatch: any) => dispatch({ type: ADD_ITEM, payload: item })
