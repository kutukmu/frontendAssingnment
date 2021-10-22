import Login from './Login.js'
import Profile from "./Secret"
import { history } from './history';
import {
     Router,
    Switch,
    Route,
  } from "react-router-dom";
 import  PrivateRoute from "./PrivateRoute"

  
const App = (props) =>{

    return (
        <Router history={history}>
            <Switch>
        <Route exact path="/">
          <Login />
        </Route>
       <PrivateRoute exact path='/user/:id' component={Profile}/>
      </Switch>
        </Router>
        
    )

}
export default App