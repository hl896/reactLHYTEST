import React, { Component } from 'react';
import './CommentStyle/comment.css';
import Comment from './Comment';
import faker from 'faker';

class ApprovalCard extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="ui card">
                
                <div className="content">Are you sure</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default ApprovalCard;