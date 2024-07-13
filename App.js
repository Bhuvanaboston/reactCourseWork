const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', { id: 'grandchild1' }, 'Nested in react h1'),
    React.createElement('h2', { id: 'grandchild2' }, 'Nested in react h2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: 'grandchild3' }, 'Nested in react h1'),
    React.createElement('h2', { id: 'grandchild4' }, 'Nested in react h2'),
  ]),
]);

const heading1 = React.createElement(
  'h1',
  { id: 'sample' },
  'Hello from React!!!'
);
console.log(heading1); //object
const root1 = ReactDOM.createRoot(document.getElementById('mainContent'));
root1.render(heading1);
const root2 = ReactDOM.createRoot(document.getElementById('nextContent'));

root2.render(parent);
