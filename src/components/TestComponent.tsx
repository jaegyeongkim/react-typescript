import React from "react";

interface TestComponentProps {
  test1: number;
  test2: number;
}

const TestComponent = ({ test1, test2 }: TestComponentProps) => {
  return <div>TestComponent</div>;
};

export default TestComponent;
