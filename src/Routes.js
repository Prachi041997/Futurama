import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Character from './Character'
const Routes = ()=> {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/character/:id' component={Character}/>
            </Switch>
        </Router>
    )
}
export default Routes