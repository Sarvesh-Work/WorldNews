import React, { Component } from 'react'
import Navebar from './component/Navebar'
import News from './component/News'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import  "./App.css"



export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navebar/>
        <Routes>

      <Route exact path="/" element={<News category=""/>}/>
      <Route exact path="/business" element={<News key="business" category="business"/>}/>
      <Route  exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
      <Route exact path="/health" element={<News key="health" category="health"/>}/>
      <Route exact path="/science" element={<News key="science"category="science" />}/>
      <Route exact path="/sports" element={<News  key="sport"category="sport"/>}/>
      <Route exact path="/technology" element={<News key="technology" category="technology"/>}/>
      
      </Routes>
      </Router>
      </>
    )
  }
}

React