import { iProjectItem } from '../types'

export const sortProjectsByNewest = (arr: iProjectItem[]) => arr.sort((a, b) => b.created - a.created)

export const formatUnixTimestamp = (unixNumber: number) => {
    const date = new Date(unixNumber)
    const dateString = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    const timeString = date.toLocaleTimeString('en-US', { timeStyle: 'short' })
    return `${dateString} ${timeString}`
}
