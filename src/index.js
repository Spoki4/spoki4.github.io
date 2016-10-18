import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Application from "./containers/Application";

import Blog from './components/Blog'
import About from './components/About'
import NotFound from "./components/NotFound";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";
import Post from "./components/Post";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/"  component={Application}>
            <IndexRoute component={Blog} />
            <Route path="post/:postId" component={Post}/>
            <Route path="about" component={About}/>
            <Route path="projects" component={ProjectList} />
            <Route path="projects/:projectId" component={Project} />
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>,
    document.getElementById('root'));