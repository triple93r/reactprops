import React from 'react';

// Define the interface for props
interface UserProps {
  name: string;
  age: number;
  isAdmin?: boolean;  // optional prop
}

const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Role: {props.isAdmin ? "Admin" : "User"}</p>
    </div>
  );
};

export default User;