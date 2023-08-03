import React from 'react'
import { connect } from 'react-redux'
import './styles/App.css'

import Header from './components/Header'
import List from './components/List'

interface iApp {
    listItems: string[]
}

const App = ({ listItems }: iApp) => {
    console.log(listItems)

    return (
        <div className='App'>
            <Header />
            <List />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
  listItems: state.list.items
})

export default connect(mapStateToProps)(App)
