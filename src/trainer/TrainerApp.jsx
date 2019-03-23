import React, { Component } from 'react';
import faker from 'faker';
import Trainers from './Trainers';
import Clock from '../Clock/Clock';
import './trainerStyle/trainer.css'
class TrainerApp extends  Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="ui container">
                <Trainers 
                    author="Sam"
                    timeAgo={<Clock/>}
                    content="frontend stack"
                    avatar={faker.image.avatar()}
                />
               
                <Trainers 
                    author="Tom"
                    timeAgo={<Clock/>}
                    content="backend stack"
                    avatar={faker.image.avatar()}
                />
                <Trainers 
                    author="Ivy"
                    timeAgo={<Clock/>}
                    content="DataBase stack"
                    avatar={faker.image.avatar()}
                />
                
                <Trainers 
                    author="Leo"
                    timeAgo={<Clock/>}
                    content="cloud stack"
                    avatar={faker.image.avatar()}
                />
                
            </div>
                
        );
    }



}

export default TrainerApp;