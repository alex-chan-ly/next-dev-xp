import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Presentation,
  { 
    Main,
    Bootstrap,
    Introduction,
    Kubernetes,
    Istio,
    Workshop1,
    Workshop2,
    Workshop3,
    Workshop4,
    Workshop5,
    Workshop6,
    Workshop7,
    Workshop8,
    Workshop9,
    Workshop10,
    Workshop11,
    Workshop12,
    Workshop13,
  } from './presentation'

const routes = () => {
  return (
    <Router forceRefresh={true} >
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/bootstrap/' component={Bootstrap} />
        <Route path='/intro/' component={Introduction} />
        <Route path='/kubernetes/' component={Kubernetes} />
        <Route path='/istio/' component={Istio} />
        <Route path='/lab1' component={Workshop1} />
        <Route path='/lab2' component={Workshop2} />
        <Route path='/lab3' component={Workshop3} />
        <Route path='/lab4' component={Workshop4} />
        <Route path='/lab5' component={Workshop5} />
        <Route path='/lab6' component={Workshop6} />
        <Route path='/lab7' component={Workshop7} />
        <Route path='/lab8' component={Workshop8} />
        <Route path='/lab9' component={Workshop9} />
        <Route path='/lab10' component={Workshop10} />
        <Route path='/lab11' component={Workshop11} />
        <Route path='/lab12' component={Workshop12} />
        <Route path='/lab13' component={Workshop13} />
      </div>
    </Router>
  )
}

export default routes
