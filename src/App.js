import React, { Component } from 'react';
import './App.css';
import ParticlesOpt from './Background';
import Particles from 'react-particles-js';
import Logo from './Components/Logo/Logo';
import Text from './Components/Text/Text';
import './Components/Logo/Logo.css';
import 'tachyons';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    params={ParticlesOpt}
                    />
                <Text />
            <Logo />
            </div>
        );
    }
}

export default App;
