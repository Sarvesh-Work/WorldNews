import React, { Component } from 'react'
import { Link,Outlet} from 'react-router-dom'
import Logo from "./logo.png"


export default class Navebar extends Component {

constructor(){
  super()
   this.state={
      input:" "
   }
}

 b=()=>{
  this.setState({
      input:document.getElementById("search").value.toLowerCase()
  })
}
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{mixBlendMode:"multiply"}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-1" to="/"><img src={Logo} alt="" style={{height:"40px",width:"40px"}}/></Link>
    <Link className="navbar-brand" to="/">WorldNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav col-7 me-auto mb-2 mb-lg-0 d-flex justify-content-between">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" id="navcolor">Home</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/business" id="navcolor">Business</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/entertainment" id="navcolor">Entertainment</Link>
        </li>
       
        <li className="nav-item"> 
          <Link className="nav-link" to="/health" id="navcolor">Health</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/science" id="navcolor">Science</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/sports" id="navcolor">Sports</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/technology" id="navcolor">Technology</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{border:"1px solid red" }} id="search" />
       
        <Link className="btn btn-outline-success" type="submit" to={`/${this.state.input}`} onClick={this.b} >Search</Link>
      </form>
    </div>
  </div>
</nav>
<Outlet/>

      </>
    )
  }
}

React
