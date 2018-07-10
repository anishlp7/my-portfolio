import React, { Component } from 'react';
import './App.css';
import ParticlesOpt from './Background';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigition/Navigation'
import 'tachyons';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Particles className='particles'
                    params={ParticlesOpt}
                    />
               <Navigation />
            </div>
        );
    }
}

export default App;
