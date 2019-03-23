import React, {Component} from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'
import SOCIAL_FRAME from './SOCIAL_FRAME'

class socialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Contact Me</h2>
                <hr/>
                <div style={{display:'block',textAlign:'center'}}>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE=>{
                            return(
                                <SOCIAL_FRAME key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                            );
                            
                        })
                    }
                </div>
            </div>
        );
    }
}

export default socialProfiles;