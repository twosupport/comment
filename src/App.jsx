import React from 'react';
import {Route} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router'
import {history} from '../redux/configureStore'
import MainPage from './MainPage/MainPage'
import './root.scss';

const App = () => {
    return(
    <>
        <ConnectedRouter history={history}>	
            <Route exact path="/" component={MainPage}/>
        </ConnectedRouter>    
    </>
    )
}

export default App;