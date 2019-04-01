import React, { Component } from 'react'
import { runInContext } from 'vm';
import './SeasondisplyStyle/seasonstyle.css';
import SearchApp from '../search/SearchApp';

const seasonConfig = {
    summer:{
        text:"Let's hit the beach!",
        iconName:"sun"
    },
    winter:{
        text:"Burr is cold",
        iconName:"snowflake"
    },
    spring:{
        text:"flouring",
        iconName:"leaf"
    },
    autumn:{
        text:"raining",
        iconName:"rain"
    }

}

const getSeason=(lat,month)=>{
    // if(month>2&&month<9){
    //     return lat>0?'sumer':'winter';

    // }else{
    //     return lat>0?'winter':'summer';
    // }
    switch(month){
        case 0:
            return lat>0?'winter':'summer';
            break;
        case 1:
            return lat>0?'winter':'summer';
            break;
        case 2:
            return lat>0?'spring':'autumn';
            break;
        case 3:
            return lat>0?'spring':'autumn';
            break;
        case 4:
            return lat>0?'spring':'autumn';
            break;
        case 5:
            return lat>0?'summer':'winter';
            break;
        case 6:
            return lat>0?'summer':'winter';
            break;
        case 7:
            return lat>0?'summer':'winter';
            break;
        case 8:
            return lat>0?'autumn':'spring';
            break;
        case 9:
            return lat>0?'autumn':'spring';
            break;
        case 10:
            return lat>0?'autumn':'spring';
            break;

        case 11:
            return lat>0?'winter':'summer';
            break;
        default:
            console.log('default');
    }
}





// const SeasonDisplay =props=>{
//     const season = getSeason(props.lat,new Date().getMonth());
//     // const season ='summer';
//     const {text, iconName}=seasonConfig[season];
    
   
//     return (
//         <div>
//             <div className={`season-display ${season}`} >
//                 <h1> <i className={`left-icon huge ${iconName} icon`}/> </h1>
//                 <h1><button onClick={addnew} >{text}</button></h1>
//                 <h1><i className={`right-icon huge ${iconName} icon`} /> </h1>
//             </div>
//         </div>
//     );


// }

class SeasonDisplay extends Component{
    constructor(props){
        super(props);
        this.state={
            status:true
        }
        
    }
    addnew = () => {
        console.log('clicked')
        this.setState(prevState=>({
            status:!prevState.status
        }))
        
    }

    onSearchSubmit=(e)=>{
        
        console.log('SearchAPP-term:'+e)
    }
    render(){
        const season = getSeason(this.props.lats,new Date().getMonth());
        const {text, iconName}=seasonConfig[season];
        return (
            <div>
                {
                    this.state.status?<div className={`season-display ${season}`} >
                        <h1> <i className={`left-icon huge ${iconName} icon`}/> </h1>
                        <h1><button onClick={this.addnew} >{text}</button></h1>
                        <h1><i className={`right-icon huge ${iconName} icon`} /> </h1>
                    </div>:<SearchApp myonSubmit={this.onSearchSubmit} />

                }
            </div>
            
        );
    }
        
}

export default SeasonDisplay;