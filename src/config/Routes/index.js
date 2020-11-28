import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppContextProvider} from '../../context/appContext';
import PrivateRoute from '../PrivateRoute';


import { Login, Register, Home, MakePayment, Transactions, AddMusicPage } from '../../pages';

const Routes = () => {
    return (
        <AppContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/login"><Login/></Route>
                    <Route exact path="/register"><Register/></Route>
                    <PrivateRoute path="/makepayment" component={MakePayment}/>
                    <PrivateRoute path="/transactions" component={Transactions}/>
                    <PrivateRoute path="/addmusic" component={AddMusicPage}/>
                    <PrivateRoute path="/" component={Home}/>
                </Switch>
            </Router>
        </AppContextProvider>
    )
}

export default Routes
