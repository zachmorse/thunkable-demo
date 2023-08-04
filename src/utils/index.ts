import { iProjectItem } from '../types'

export const sortProjectsByNewest = (arr: iProjectItem[]) => arr.sort((a, b) => b.created - a.created)
