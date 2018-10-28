import React,{Component} from 'react';

import './Styles/Weather.css';


class Weather extends Component{
    constructor(props){
super(props);
this.state={
    value:null,
}
    }
    
    submitPlace(event){
        event.preventDefault();
        let location=document.getElementsByClassName('input');
        console.log(location)
        console.log(this.refs.input.value);

    }
    render(){
        return(
     <div id="wrapper">
            <div id="container">
            <h1>Weather Report</h1>
          <form>
           
           <input ref="input" type="text" className="input" placeholder="Please enter area name"/>
           <input onClick={(event)=>this.submitPlace()} type="submit" className="submit"/>
           </form>
           <div className="error"></div>
           <div>
               <ul id="listItems">
                   
               </ul>
           </div>
           </div>
     </div>
        )  
    }
}


export default Weather;