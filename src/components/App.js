import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Route , Switch } from "react-router-dom";

import Comments from './Comment'
import Posts from './Posts'
import NoMatch from './NoMatch'

export default class App extends React.Component {


    render() {
        return (
            <div className="container">
                <Header />
                <div className="container">
                    <div style={{ paddingTop : 70 }}>
                        <Switch>
                            <Route path="/" exact={true} component={Posts}/>
                            <Route path="/comments/:id" component={Comments}/>  
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}