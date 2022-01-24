import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";
import "./App.css"
import Home from "./Component/Home/Home";
import Services from "./Component/Pages/Services";
import Products from "./Component/Pages/Products";
import SignUp from "./Component/Pages/SignUp";
import Footer from "./Component/Footer/Footer";



function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Services" component={Services}/>
         <Route path="/Products" component={Products}/>
         <Route path="/sign-up" component={SignUp}/>
       </Switch>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
