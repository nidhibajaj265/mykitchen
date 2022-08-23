import React from 'react';
import './App.css';
import {Container, Row} from 'react-bootstrap'
import Welcome from './components/Welcome'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import AddMenuItem from './components/AddMenuItem';
import ListMenuItems from './components/ListMenuItems';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import background from './background.png';
import SignUpform from './components/SignUpForm';

function App() {
  // const myStyle={
  //   backgroundImage: "url(/background.png)",
  //   height:'100vh',
  //   marginTop:'-70px',
  //   fontSize:'50px',
  //   backgroundSize: 'cover',
  // }
  return (
    <Router>
        <NavigationBar/>
        <Container >
   
            <Row>
                <Routes>
                    <Route path="/"  element={<Welcome/>}/>
                    <Route path="/additem" element={<AddMenuItem/>}/>
                    <Route path="/menu" element={<ListMenuItems/>}/>
                    <Route path="/signUp" element={<SignUpform/>}/>
                </Routes>
            </Row>
            <div>
        <img src={background} width={1310} height={500}  mb-n3 alt="background" / >
            </div>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;