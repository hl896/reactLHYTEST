import React,{Component} from 'react';
import PROJECTS from './data/projects';
import Proframe from './Proframe';


class Projects extends Component{
    render (){
        return(
            <div style={{backgroundColor:'rgba(36, 48, 53,0.3)',height:'100vh',overflow:'auto'}}>
                <h2>HighLight Projects</h2>
                <div style={{textAlign:'center'}}>      
                    {
                        PROJECTS.map(PROJECT=>{
                            return(
                                <Proframe key={PROJECT.id} project={PROJECT}/>
                            )
                        })
                    }                  
                </div>
            </div>
        );
    }
}
export default Projects;