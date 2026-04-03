import React from 'react';

export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1.0rem 2rem', 
      borderBottom: '1px solid #eaeaea',
      fontFamily: 'JetBrains Mono'
    }} className="bg-white dark:bg-gray-900">
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <a href="/" style={{ 
          textDecoration: 'none', 
          color: '#333', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem' // Adjust this for more/less space around the logo
        }}>
          <span>NICHE</span>
          <img 
            src="/logo_grey.svg" 
            alt="Logo" 
            style={{ 
              height: '3.0rem', // Match your font size
              width: 'auto',
              display: 'block'
            }} 
          />
          <span>SYSTEMS</span>
        </a>
      </div>
      <nav style={{ display: 'flex', gap: '2.0rem' }}>
        <a href="/about" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>About</a>
        <a href="/team" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Team</a>
        <a href="/clients" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Clients</a>
        <a href="/contact" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Contact</a>
      </nav>
    </header>
  );
}