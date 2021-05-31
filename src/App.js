import React from "react"
import { Switch, Route } from "react-router-dom"

import './App.css';

import Home from "./pages/Home/Home.page"
import AboutMe from "./pages/AboutMe/AboutMe.page.jsx"
import Contact from "./pages/Contact/Contact.page"
import Projects from "./pages/Projects/Projects.page"
import Comments from "./pages/Comments/Comments.page"

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path="/comments" component={Comments} />
            </Switch>

        </div>
    );
}

export default App;
