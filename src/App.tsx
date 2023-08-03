import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './styles/App.css'

import Header from './components/Header'
import List from './components/List'
import { AddItem } from './store/actions/list'

interface iApp {
    addItem: (item: string) => void
}

const App = ({ addItem }: iApp) => {
    return (
        <div className='App'>
            <Header />
            <List />
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: string) => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(App)
