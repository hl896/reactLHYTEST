import React,{Component} from 'react';

class SearchApp extends Component{
    constructor(props){
        super(props);
        this.state={
            placeholdertext:'input here',
            term:''
        }
        //this.onInputChange=this.onInputChange.bind(this);
        //this.onSubmitAction= this.onSubmitAction.bind(this);
    }
    onInputChange = (e) =>{
        this.setState({term:e.target.value})
        
    }
    onSubmitAction = (event) =>{
        event.preventDefault();
        this.props.myonSubmit(this.state.term);

    }
    render(){
        return(
            <div className="ui segment" >
                <form className="ui form" onSubmit={event => this.onSubmitAction(event)}>
                    <div className="field" >
                        <label>Image Search</label>
                        <input 
                        type="text" 
                        placeholder={this.state.placeholdertext}
                        value={this.state.term}
                        onChange={event =>this.onInputChange(event)}
                        />
                        <div>display:{this.state.term}</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchApp;