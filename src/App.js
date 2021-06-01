import React from "react"
import { Switch, Route } from "react-router-dom"
// import { connect } from "react-redux"

import './App.css';

import Home from "./pages/Home.page"
import AboutMe from "./pages/AboutMe.page.jsx"
import Contact from "./pages/Contact.page"
import Projects from "./pages/Projects.page"
import Comments from "./pages/Comments.page"
// import ToastNotify from "./components/ToastNotify.component";

function App() {
    return (
        <div className="App">
            {/* {isToast && <ToastNotify />} */}
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
// const mapStateToProps = (state) => {
//     const isToast = state.isToast
//     return { isToast }
// }
// export default connect(mapStateToProps)(App);
export default App