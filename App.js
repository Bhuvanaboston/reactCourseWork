import React from 'react';
import ReactDOM from 'react-dom/client';

const JsxHeading = () => <h1>using JSX in App</h1>;
const sampleElement = <h1>new React element</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JsxHeading />);

const HeadingComponent = () => {
  return (
    <div>
      {console.log('hello Bhuvana')}
      {sampleElement}
      <h1>Hello Bhuvana</h1>
      {JsxHeading()}
      <JsxHeading />
      <JsxHeading></JsxHeading>
      <h1>Hello boston</h1>
    </div>
  );
};
root.render(<HeadingComponent />);
