import { ADD_ITEM } from './actionTypes'

export const AddItem = (item: string) => ({ type: ADD_ITEM, payload: item })
