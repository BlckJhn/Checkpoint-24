import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './style.css'; 

const firstName = "John"; // Replace with your name or leave it empty

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px',color:'white' }}>
        <p>
          Hello, {firstName ? firstName : 'there'}!
        </p>
        {firstName && <img src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Advert" />}
      </div>
    </div>
  );
}

export default App;
