import React, { Component } from 'react';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard'
// import Clock from '../Clock/Clock';
// import './trainerStyle/trainer.css'
class CommentApp extends  Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="ui container comments">
                {/* <div className="card"> */}
                    
                    <ApprovalCard >
                        <Comment 
                            author="Neil Grey"
                            timeAgo="6:01"
                            content="frontend stack"
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                {/* </div> */}
                    
                {/* <div className="card"> */}
                    <ApprovalCard >
                        <Comment 
                            author="Alpha Kay"
                            timeAgo="6:04"
                            content="backend stack"
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                {/* </div> */}
                    

                {/* <div className="card"> */}
                    <ApprovalCard >
                        <Comment 
                            author="Safari Ian"
                            timeAgo="4:33"
                            content="DataBase stack"
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                {/* </div> */}

                {/* <div className="card"> */}
                    <ApprovalCard >
                        <Comment 
                            author="Glanceriance "
                            timeAgo="2:22"
                            content="cloud stack"
                            avatar={faker.image.avatar()}
                        />
                    </ApprovalCard>
                {/* </div> */}
            </div>
                
        );
    }



}

export default CommentApp;