import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState<string>();

  useEffect(() => {
      const url = 'https://theos-books-api.herokuapp.com/hello';

      const fetchData = async() => {
          try {
              const response = await fetch(url, {
                  headers: {
                      'Accept': `application/json`,
                      'Content-Type': `application/json`
                  }
              });
              const text = await response.text();
              console.log(text);
              setApiResponse(text);
          } catch (error) {
              console.error("error: ", error);
          }
      }

      fetchData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
