import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header'
import Main from './Main'
import Design from './Design'
import Feature from './Feature'
import Contacts from './Contacts'
import Modal from './Modal'

const rootNode = document.getElementById('root')

const root = ReactDOM.createRoot(rootNode)

root.render(
    <>
        <Header />
        <Main />
        <Design />
        <Feature />
        <Contacts />
        <Modal />
    </>
)
