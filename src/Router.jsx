import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { DataService } from './DataService'
import { useTimeline } from './Features/Timeline/useTimeline'

const Timeline = useTimeline({ DataService })

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Timeline} />
      <Route path='/timeline' component={Timeline} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)