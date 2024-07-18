import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
/*
-Header
    -logo
    -Nav Items
-Body
    -Search
    -Restaurant Container
      -Restaurant Cards
-Footer
    -Copyrights
    -Links
    -Address
    -Contact
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
