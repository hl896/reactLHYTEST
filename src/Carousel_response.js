import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel_response.css';
import image1 from './img/pexels-photo-839115.png';
import image2 from './img/pexels-photo-1470165.jpeg';
import image3 from './img/pexels-photo-1598505.jpeg';


class Carousel_response extends Component {
    constructor(props){
        super();
        this.state={
            addClass:false
        }
    }
    // handlechanged(){
    //     this.setState({addClass:!this.state.addClass});
    // }

    // onChange(middle_area){
    //     this.handlechanged();
    //     if(this.state.addClass){
    //         middle_area.push('fadeIn');
    //     }else{
    //         middle_area.pop('fadeIn');
    //     }
    //     return middle_area;
    // }
    tell(){
        alert('hello');
    }
    render() {
        // let middle_area=["middle_area"];
        // this.onChange(middle_area);
        return (
            <Carousel
                axis='vertical'
                verticalSwipe='standard'
                emulateTouch={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                width={'100vw'}
                height={'100vh'}
                autoPlay={false}
                onChange={this.tell()}
            >
                <div>
                    <img src={image1} />
                    <div className='middle_area' >
                        {/* <div className="left_area" >
                            haoyang li
                            <p></p>
                        </div>
                        <div className="right_area">
                            <p>cv</p>
                            <p>discription</p>
                        </div> */}
                    </div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <div className='middle_area' >
                        {/* <div className="left_area" >
                            haoyang li
                        </div>
                        <div className="right_area">
                            <p>cv</p>
                            <p>discription</p>
                        </div> */}
                    </div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <div className='middle_area' >
                        {/* <div className="left_area" >
                            haoyang li
                        </div>
                        <div className="right_area">
                            <p>cv</p>
                            <p>discription</p>
                        </div> */}
                    </div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default Carousel_response;