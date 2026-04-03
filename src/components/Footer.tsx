import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      marginTop: '2rem', // Changed from 'auto' to a fixed margin
      padding: '1.5rem 2rem', // Cut vertical padding in half
      borderTop: '1px solid #eaeaea',
      backgroundColor: '#fafafa',
      textAlign: 'center',
      color: '#666',
    }}>
      <p style={{ margin: 0, fontWeight: 600 }}>&copy; {currentYear} Niche Systems LLC</p>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
        Building robust software solutions for academic and enterprise partners.
      </p>

    </footer>
  );
}