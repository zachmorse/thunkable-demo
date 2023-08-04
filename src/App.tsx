import React from 'react'

import './styles/App.css'

import Header from './components/Header'
import List from './components/List'

interface iApp {
    addProject: (item: string) => void
}

const App = () => {
    return (
        <div className='App'>
            <Header />
            <List />
        </div>
    )
}

export default App
