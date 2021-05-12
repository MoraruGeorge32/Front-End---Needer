import './App.css';
import Footer from "./footer-folder/footer";
import Navbar from "./Navbar/Navbar";
import Home from "./homePage/Home";
import Help from "./Help/Help";
import Forum from "./App-forum/App-forum";
import FAQPage from "./faqPage/faqPage";
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
          <Route path="/faqpage">
            <FAQPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
