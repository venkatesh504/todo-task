import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './../App.css';

 class  Home extends  Component{
    render(){
        return(
            
    <div className="bg">
    
    <div className="row container m-auto">
    <div className="col-6 "> <div className="boards-home">
    <Link to="/" >home</Link>
        </div> 
    </div>
    <div className="col-6 "> <div className="boards-home">
    <Link to="/create" >Boards</Link>
        </div> 
    </div>

    </div>
    </div>

        )
    }
}
export default Home;
