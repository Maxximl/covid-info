import React from 'react';
import styles from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader'
import Content from './components/Content/Content';



const App = () => {
    return <div className={ styles.container }>
        <AppHeader/>
        <Content/>
    </div>
}

export default App;