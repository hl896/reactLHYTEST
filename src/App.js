import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import slider2img from './img/2.jpeg'
import slider3img from './img/3.jpeg'


import Carousel from 'react-bootstrap/Carousel';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }



class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <div>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?cs=srgb&dl=conceptual-creativity-design-430205.jpg&fm=jpg"
              alt="First slide"
            />
            <Carousel.Caption className='sliderH3'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="d-block w-100"
              src={slider2img}alt="Third slide"
            />
            <Carousel.Caption className='sliderH3'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img
              className="d-block w-100"
              src={slider3img}
              alt="Third slide"
            />

            <Carousel.Caption className='sliderH3'>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default App;
