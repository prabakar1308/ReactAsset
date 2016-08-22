import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Layout from './components/Layout.jsx';
import ProjectInfo from './components/ProjectInfo.jsx';
import PersonInfo from './components/PersonInfo.jsx';

const app = document.getElementById( 'app' );

ReactDOM.render( <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                <IndexRoute component={ProjectInfo}></IndexRoute>
                <Route path='project' component={ProjectInfo}></Route>
                <Route path='person' component={PersonInfo}></Route>
                </Route>
                </Router>, app );
