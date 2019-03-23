import React, {Component} from 'react';




class Proframe extends Component{
    render(){
        const {id,title, description, images, link}=this.props.project;

        return(
            <div style={{display:'inline-block', width:250, margin:10}}>
                <a href={link} >
                    <h3>{title}</h3>
                    <img src={images} alt="profile" width='200' height='160'/>
                    <p>{description}</p>
                </a>
            </div>
        )
    }
}

export default Proframe;