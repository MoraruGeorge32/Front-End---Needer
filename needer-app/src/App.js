import './App.css';
import Footer from "./footer-folder/footer";
import Navbar from "./Navbar/Navbar";
import Home from "./homePage/Home";
//import AlteServicii from "./alte_servicii_component/alte_servicii"
import Help from "./Help/Help"
import Forum from "./App-forum/App-forum";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/form">
            <Forum />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
