// IN JSX
// html class === JSX className
// html for === JSX htmlFor
// tabindex === tabIndex
// href="#" ===href="/"

import './App.css';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar brandText="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
