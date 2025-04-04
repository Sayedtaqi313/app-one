import React from 'react';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
      }}
    >
      <div
        style={{
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            margin: '0 0 1rem',
            color: '#333'
          }}
        >
          Welcome to My React App
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#666'
          }}
        >
          Enjoy a beautifully designed interface that takes up the entire page!
        </p>
      </div>
    </div>
  );
}

export default App;