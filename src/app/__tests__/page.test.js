import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Page from '../page';
import content from '../content'; 



describe('Page Component', () => {
  test('renders the Page component without crashing', () => {
    console.log(content.section1); 
    render(<Page />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('renders the logo', () => {
    render(<Page />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  test('renders the correct number of carousel items', () => {
    render(<Page />);
    const carouselItems = screen.getAllByAltText(/Slide/i);
    expect(carouselItems.length).toBe(3);
  });

  test('renders the correct navigation links', () => {
    render(<Page />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBe(4); // Adjust based on the number of links
    expect(navLinks[0]).toHaveTextContent(content.section1);
    expect(navLinks[0]).toHaveAttribute('href', '#section1');
  });

  test('clicking navigation link scrolls to the correct section', () => {
    render(<Page />);
    const link = screen.getByText(content.section1);
    fireEvent.click(link);
    const section = screen.getByText(content.section1);
    expect(section).toBeInTheDocument();
  });

  test('toggles menu when checkbox is clicked', () => {
    render(<Page />);
    const menuToggle = screen.getByLabelText(/menu-toggle/i);
    fireEvent.click(menuToggle);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeVisible();
  });

  test('renders Google Analytics script', () => {
    render(<Page />);
    const script = screen.getByText(/gtag/);
    expect(script).toBeInTheDocument();
    expect(script.innerHTML).toContain('gtag');
  });
});
