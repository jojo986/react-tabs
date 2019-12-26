import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Tabs from '../Tabs/Tabs'

class PageContent extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Tabs} />
            </Switch>
        )
    }
}

export default PageContent;