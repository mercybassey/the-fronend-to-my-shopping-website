import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
// import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
    return(

      <BrowserRouter>
        <div className="grid-container">
          <header className="header">
              <div className="brand">
                <button onClick={openMenu} className="brand-button">
                    &#9776;
                </button> 
                  <Link to="/" style={{fontSize: "24px"}}> QueenM Grills</Link>
              </div>

              <div className="header-links">
                  <Link to="cart.html"><i className="fa fa-cart-plus" style={{fontSize: "25px"}}></i></Link>
                  <Link to="signin" style={{fontSize: "22px"}}>Sign In</Link>
              </div>
          </header>

          <aside className="sidebar" style={{color: "white"}}>
              <h3>Shopping Categories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}><i className="fa fa-times"></i></button>
              <ul >
                  <li><Link to="index.html">Pizza</Link></li>
                  <li><Link to="index.html">Cakes</Link></li>
              </ul>
          </aside>

        

          <main className="main ">
              <div className="content ">
                <Route  path="/product/:id" component={ProductScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
                  
              </div>

          </main>

          <footer className="footer">
              All rights reserved.
          </footer>
      </div>
    </BrowserRouter>
    );
  
}

export default App;
