import logo from './logo.svg';
import './App.css';

import Apple from './apple'
import Sample from './Reactsession/Sample';
import Employee from './Reactsession/Employee'
import Header from './Reactsession/Header';
import Footer from './Reactsession/Footer';
import MyResume from './Reactsession/MyResume';
import CourseRegistration from './Reactsession/CourseRegistration';



function App() {
  return (
    <div className="App">
      
      {/* <Apple />
      <Sample /> */}
      {/* <Employee /> */}
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <MyResume/> */}
      <CourseRegistration/>
      


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
