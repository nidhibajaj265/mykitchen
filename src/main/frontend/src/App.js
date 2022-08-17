import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap'
import Welcome from './components/Welcome'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ReactDOM from 'react-dom'

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Container>
            <Row>
                <Welcome/>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;