import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to="/pieChart" class="nav-link active" aria-current="page" href="#">PieChart</Link>
        <Link to="/FetchData" class="nav-link active" aria-current="page" href="#">FetchData</Link>
        <Link to="/Bar" class="nav-link active" aria-current="page" href="#">Bar</Link>
        <Link to="/Horizontal" class="nav-link active" aria-current="page" href="#">Horizontal</Link>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
