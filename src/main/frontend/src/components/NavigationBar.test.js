import {screen, render} from '@testing-library/react';
import { Navbar } from 'react-bootstrap';
import NavigationBar from './NavigationBar'
import {Link, Route, Router} from 'react-router-dom';

const MockNavigationBar = ()=>{
    return(
    <Router>
        <NavigationBar/>
    </Router>
    )
}

// test('should contain app logo', ()=>{
//     render(<MockNavigationBar/>);
//     const logoElement = screen.getByRole("img");
//     expect(logoElement).toBeInTheDocument();
// });

// test('should contain display menu link', ()=>{
    
//     render(<MockNavigationBar/>);
//     const menuElements = screen.getAllByRole('link');
//     expect(menuElements.size).toBe(2);
// });
