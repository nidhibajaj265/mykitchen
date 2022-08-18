import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap'
import Welcome from './components/Welcome'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import AddMenuItem from './components/AddMenuItem';
import ListMenuItems from './components/ListMenuItems';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Routes>
                    <Route path="/"  element={<Welcome/>}/>
                    <Route path="/additem" element={<AddMenuItem/>}/>
                    <Route path="/menu" element={<ListMenuItems/>}/>
                </Routes>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;