import React,{Component} from 'react'
import faker from 'faker'

class NAMECARDSFrame extends Component{
    
    render(){
        const { name,phone,email,logo}=this.props.nameCard;
        
        return (
            <div style={{display:'inline-block', width:300, margin:10}}>
                <div style={{float:'left'}}>
                    <img src={faker.image.avatar()} width='100' height='100' style={{borderRadius:'50%'}}/>
                </div>
                <div style={{float:'left'}}>
                    <h5>{name}</h5>
                    <p>{phone}</p>
                    <p>{email}</p>
                    <p>{faker.date.weekday()}</p>
                    <p><h5>Author</h5>{this.props.author}</p>
                </div>
            </div>
        )
            


    }
}
export default NAMECARDSFrame;