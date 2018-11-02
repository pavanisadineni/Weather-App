import React,{Component} from 'react';
import './Styles/Weather.css';
import Result from './App';

class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            isValid:true,
            data:'',

        }
    }



getInfo=(Loc)=>{
    let api=`http://api.openweathermap.org/data/2.5/weather?q=${Loc}&APPID=2cf59e3c2ba338440a4e32992b4a76e7`;
    fetch(api)
    .then(response=>response.json())
    .then(data2=>{
        if(data2.cod === 200){
            this.setState(prevState=>({data:data2,isValid:true})); 

        } else if(data2.cod === '404'){
            this.setState(prevState=>({...prevState.data,isValid:false}))
        }
       

    }
        )
        
    .catch(error=>console.log(error))
}
handleSubmit=(event)=>{
    event.preventDefault();
    const searchLoc=this.search.value;
    if(searchLoc.length <= 3)
{
    console.log('please enter valid string');

}   else if(searchLoc.length >= 4){
    this.getInfo(searchLoc);

}
}
hasWhiteSpace(strg){
    
    if(strg.indexOf(' ') >=0){
        return strg.replace(' ','-')
    }else{
        return strg;
    }
}
componentDidUpdate(){

    let strg=this.state.data.weather[0].description;
    let strng=this.hasWhiteSpace(strg);
    console.log(strng)
    let random_api=`https://source.unsplash.com/daily?sky+weather${strng}`;
    console.log(random_api);
 let elem=document.getElementById('root');
   console.log(elem);
   elem.style.backgroundImage=`url('${random_api}')`;

    
}

    render(){
        return (
            <div className="container">
            <h1>Weather Application</h1>
            <form onSubmit={this.handleSubmit}>
                <input  type="text" placeholder="Enter the place..." ref={input=>this.search=input}></input>
                <button  type="submit">Submit</button>
            </form>
            <div className="result">
            {this.state.data && this.state.isValid ? 
            <Result
            name={this.state.data.name}
            country={this.state.data.sys.country}
            temp={Math.round(this.state.data.main.temp - 273.15)*100/100}
            min={Math.round(this.state.data.main.temp_min - 273.15)*100/100}
            max={Math.round(this.state.data.main.temp_max - 273.15)*100/100}
            weather={this.state.data.weather[0].description}
            clouds={this.state.data.clouds.all}
            wind={this.state.data.wind.speed}/> : null

            }
            </div>
            <div className="error">
        {this.state.isValid ? null:<h2 className="error">Please Enter valid City Name...!</h2> }
            
            </div>
            </div>
        )
    }
}

export default Weather;

