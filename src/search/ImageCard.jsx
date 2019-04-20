import React, { Component } from 'react';



class ImageCard extends Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();

    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan)
    }

    setSpan = () =>{
        console.log('reference height:'+this.imageRef.current.clientHeight);

    }

    render(){
        return (
            <div className='imageDiv' >
                <img ref={this.imageRef} src={this.props.image.urls.regular} />
                <h3>{this.props.image.alt_description}</h3>
                <p>{this.props.image.description}</p>
                
            </div>
        )
    }
}

export default ImageCard;