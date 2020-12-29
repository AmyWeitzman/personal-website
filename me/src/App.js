import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <NavBar />
                <div className="page-content">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/me' component={Home}></Route>
                        <Route exact path='/resume' component={Resume}></Route>
                        {/* <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/hobbies' component={Hobbies}></Route>
                        <Route exact path='/facts' component={Facts}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/quotes' component={Quotes}></Route>
                        <Route exact path='/blog' component={Blog}></Route>
                        <Route exact path='/blog/structure-and-applications-of-body-area-networks' component={Blog1}></Route>
                        <Route exact path='/blog/impact-of-computer-science-on-next-generation-education' component={Blog2}></Route>
                        <Route exact path='/blog/it-just-takes-a-ripple-to-start-a-wave-of-change' component={Blog3}></Route>
                        <Route exact path='/blog/if-i-had-infinite-time-and-money' component={Blog7}></Route>
                        <Route exact path='/blog/unique-interview-questions' component={Blog8}></Route> */}
                        <Route component={Error}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
