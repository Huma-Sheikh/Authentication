// components/Navbar.tsx
import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>Admin</h2>
      <ul>
        <li onClick={() => navigate('/dashboard')}>Dashboard</li>
        <li>Settings</li>
        <li>Preferences</li>
      </ul>
    </nav>
  );
};

export default Navbar;
