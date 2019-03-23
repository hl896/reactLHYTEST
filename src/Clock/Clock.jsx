import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import moment from 'moment';


function padZeo(number){
    if (number<10){

        return '0'+number;
    }
    return number;

}
class Clock extends React.Component{

    constructor(){
        super();
        this.state={

            time:new Date(),

        };

    }

    componentWillMount(){
        console.log('will mount');
        clearInterval(this.timeID);

    }
    componentDidMount(){
        console.log('did mount');
        this.updateTime();
    }
    updateTime(){
        this.timeID=setInterval( ()=>{this.setState({time:new Date()})},1000
        );   

    }

    


    
    render(){
        const {time}= this.state;

        return(



            <div>
                {/* <h2>Date:{moment().format('dddd MMMM Do YYYY, h:mm:ss a')}</h2>
                <h2>MOnth:{moment().format('MMMM ')}</h2>
                <h2>date:{moment().format('Do')}</h2>
                <h2>Year:{moment().format('YYYY')}</h2> */}

              
                <h6>Current Time:{this.state.time.toLocaleTimeString()}</h6>

                {/* <h2>H:{padZeo(time.getHours())}</h2>
                <h2>M:{padZeo(time.getMinutes())}</h2>
                <h2>S:{padZeo(time.getSeconds())}</h2> */}

                
            </div>
            

        );



    }
}


export default Clock;