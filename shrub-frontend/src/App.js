import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import GlobalStyle from './globalStyles';
import { Navbar, Footer } from './component';
import ScrollToTop from './component/ScrollToTop'
import Home from './pages/HomePage/Home';
import Coverage from './pages/Coverage/Coverage';
import AccountSummary from './pages/AccountSummary/AccountSummary';
import OAccountSummary from './pages/OAccountSummary/OAccountSummary';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar/> 
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/coverage' exact component={Coverage} />
        </Switch>
        <Switch>
          <Route path='/AccountSummary' exact component={AccountSummary} />
        </Switch>
        <Switch>
          <Route path='/OAccountSummary' exact component={OAccountSummary} />
        </Switch>
        <Footer />
    
       
      
    </Router>
    </div>
  );
}

export default App;
