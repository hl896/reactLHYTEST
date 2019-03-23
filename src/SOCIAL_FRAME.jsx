import React,{Component} from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'
import { isNullOrUndefined } from 'util';


class SOCIAL_FRAMES extends Component{
    render(){
        const {link, images,QRcode}=this.props.socialProfile;
        return(
            <div style={{display:'inline-block',textAlign:'center',width:30,height:30,margin:'7%'}}>
                <a href={link}><img src={images}/></a>
                
            </div>
        )
    }

}

export default SOCIAL_FRAMES;