"use client"

import React from 'react';

interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
};

export default MyComponent;