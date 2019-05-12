import React from 'react';
import './App.css';
import Quote from './components/Quote';

const App = () => {
  return (
    <div>
      <Quote />
      {/* <Buttons onClick={this.onChangeQuote}>New Quote</Buttons> */}
      {/* <Buttons ><i className="fab fa-twitter" style={{ marginRight: 5 }}></i>Tweet Me!</Buttons> */}
    </div>
  );
}

export default App;
