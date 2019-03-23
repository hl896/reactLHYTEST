import React,{Component} from 'react'
import NAMECARDSFrame from './NAMECARDSFrame';
import NAMECARDS from './data/namecards'


class Author extends Component{
    render(){
        return(
            <div style={{backgroundColor:'rgba(36, 48, 53,0.3)'}}>
                <h2>Authors</h2>
                <hr/>
                <div style={{textAlign:"center",display:'block'}}>
                    {
                        NAMECARDS.map(NAMECARD=>{
                            return(
                                <NAMECARDSFrame key={NAMECARD.id} nameCard={NAMECARD} author='YeungApp'/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Author;