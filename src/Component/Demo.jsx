import React from 'react';


class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:true,
        }
        this.hide_overlay=this.hide_overlay.bind(this);
    }

    hide_overlay() {
        this.setState(prevState=>({
            status:!prevState.status
        }));
    }
    

    render(){
        return(
            <div>
                {this.state.status&&<button onClick={this.hide_overlay}>
                    {
                        this.state.status?'hide-me':'false'
                    }
                </button>}
            </div>
            
            
        );
    }
}

export default Demo;