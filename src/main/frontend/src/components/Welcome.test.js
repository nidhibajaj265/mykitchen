import { render, screen } from '@testing-library/react';
import Welcome from './Welcome'

test('should show welcome message', ()=>{
    render(<Welcome/>);
    const headerElement = screen.getByText(/Welcome to Masala Kitchen/i);
    expect(headerElement).toBeInTheDocument();
});

test('should show quote text', ()=>{
    render(<Welcome/>);
    const pElement = screen.getByText(/Nothing brings PEOPLE together like GOOD food./i);
    expect(pElement).toBeInTheDocument();
}
)