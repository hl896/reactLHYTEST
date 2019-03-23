import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasondisplyStyle/geolocationStyle.css'

class Geolocation extends Component{
   
    state={
        lat:null,
        langi:null,
        errorMessage:null
    }


    componentDidMount(){
        console.log('1did mount')
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat:position.coords.latitude})
                this.setState({langi:position.coords.longitude})
            },
            err=>{
                this.setState({errorMessage:err.message})
            }
        );
    }
    componentDidUpdate(){
        console.log('2component did update')
    }

    componentWillMount(){
        console.log('3will mount')
    }
    

    renderComponent(){
        if(this.state.errorMessage&&!this.state.lat&&!this.state.langi){
            return(
                <div>
                    <div>
                        Error:{this.state.errorMessage}
                    </div>
                </div>
            );
        }else if(!this.state.errorMessage&&(this.state.lat||this.state.langi)){
            return(
                <SeasonDisplay 
                    lats={this.state.lat}
                    langis={this.state.langi}
                />
                // <div>
                //     Latitude:{this.state.lat}
                //     Longitude:{this.state.langi}
                // </div>
            );
        }
        else{
            return(
                <Spinner message="PLease accept location request"/>
            );
        }
    }
    render(){
        return <div className="border red">
            {this.renderComponent()}
        </div>
    }


}
export default Geolocation;