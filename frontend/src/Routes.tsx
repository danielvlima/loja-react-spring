import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route>
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;