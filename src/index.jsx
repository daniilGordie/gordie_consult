import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header'

const rootNode = document.getElementById('root') // элемент для рендеринга приложения React
// получаем корневой элемент
const root = ReactDOM.createRoot(rootNode)

root.render(
    <>
        <Header />
    </>
)
