import React from 'react';

// Define the interface for props
interface WelcomeProps {
  name: string;
  age: number;
  isActive: boolean;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <h3>Age, {props.age}</h3>
      <h3>Status, {props.isActive ? "Active" : "Inactive"}</h3>   
      <hr/>
    </div>

  );
};

export default Welcome;