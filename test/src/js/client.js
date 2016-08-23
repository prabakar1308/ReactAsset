import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Layout from './components/Layout.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import TeamDetails from './components/TeamDetails.jsx';
import AssetDetails from './components/AssetDetails.jsx';

const app = document.getElementById( 'app' );

ReactDOM.render( <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                <IndexRoute component={ProjectDetails}></IndexRoute>
                <Route path='team' component={TeamDetails}></Route>
                <Route path='asset' component={AssetDetails}></Route>
                </Route>
                </Router>, app );
