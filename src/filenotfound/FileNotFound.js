import React,{Component} from 'react';
import filenotfound from './filenotfound.css';

class FileNotFound extends Component{
  render(){
    
    return(
      <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <div className="test">FileNotFound please check the path and try again</div>
      </div>
    )
  }
}
 
export default FileNotFound;