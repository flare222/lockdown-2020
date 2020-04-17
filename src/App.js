import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/main.scss'

import Home from './components/Home'
import Day1 from './components/Day1'
import Day2 from './components/Day2'
// import Level1 from './components/Level1'

export default class App extends React.Component {
  render() {
    return (
      // <main className="page-container">
      //   <div className="content-wrap">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/day1" component={Day1}/>
            <Route path="/day2" component={Day2}/>
          </Switch>
        </BrowserRouter>
      //   </div>
      // </main>
    )
  }
}
