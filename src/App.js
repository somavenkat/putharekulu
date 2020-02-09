import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Home from './Navbar/Home.js';
import About from './Navbar/About.js';
import Services from './Navbar/Services.js';
import Contact from './Navbar/Contact.js';
import axios from 'axios';

import Comingsoon from './Comingsoon/Comingsoon.js';

class App extends Component {

    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {            
            const flow = response.data;
            // const pers = this.flow.map(person => {
            //     console.log(person);
            // })
        })
    }
    render(){
        
    this.state = {
        persons: []
    }        
        return(
            <BrowserRouter>
                <div className="App">
                    <Comingsoon />
                    {/* <Navbar title="Compnay Logo"/>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} /> */}
                </div>
            </BrowserRouter>
        )
    }
} 
export default App;
        
        
