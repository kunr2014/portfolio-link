import React, {Component} from 'react';
//import { Document } from "react-pdf";
//import resume from '../Resume.pdf';
import pdf from '../Resume.pdf';
//import { Button } from 'react-bootstrap';
class Resume extends Component{

render(){
    return(

      <div className = "App">
        <a href = {pdf} target = "_blank">Download Pdf</a>
      </div>
      )
  }
}

export default Resume;
