import './App.css';
<<<<<<< HEAD
import Hamburger from './Hamburger';

function App() {
  return (
    <Hamburger/>
=======
import Footer from "./footer-folder/footer";
import Navbar from "./Navbar/Navbar";
import Home from "./homePage/Home";
import Help from "./Help/Help"
import Forum from "./App-forum/App-forum";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingScreen from "./Waiting_screen/loadingScreen";


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
          <Route path="/loading">
            <LoadingScreen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
>>>>>>> abf66afc5a2142ada8ba6c742765e7bd6f8212d7
  );
}

export default App;
