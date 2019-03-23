import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel_response from './Carousel_response';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import Author from './Author';
import TrainerApp from './trainer/TrainerApp'
import CommentApp from './Comment/CommentApp';
import Geolocation from './Seasons/Geolocation';
import Demo from './Component/Demo';
import SearchApp from './search/SearchApp';
ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<Carousel_response />, document.getElementById('root2'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(<Projects />,document.getElementById('root2'));

ReactDOM.render(<SocialProfiles />,document.getElementById('root3'));
ReactDOM.render(<Author />,document.getElementById('root4'));
ReactDOM.render(<TrainerApp />,document.getElementById('root5'));
ReactDOM.render(<CommentApp />,document.getElementById('root6'));
ReactDOM.render(<Geolocation />,document.getElementById('root7'));

ReactDOM.render(<Demo />,document.getElementById('root8'));
ReactDOM.render(<SearchApp />,document.getElementById('root-video'));

serviceWorker.unregister();
