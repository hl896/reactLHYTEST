import React, { Component } from 'react';

class Comment extends Component{
    constructor(props){
        super();
    }


    render(){
        return(
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={this.props.avatar} alt=""/>
                </a>
                <div className="contents">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date" >{this.props.timeAgo}</span>
                    </div>
                    <div className="text" >{this.props.content}</div>
                </div>   
            </div>
        );
    }
}

export default Comment;