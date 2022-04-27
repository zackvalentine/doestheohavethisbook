import React, {useEffect, useState} from 'react';
import './App.css';
import {Table} from "./Table";

function App() {
  const [apiResponse, setApiResponse] = useState<string>();

  useEffect(() => {
      const url = 'https://theos-books-api.herokuapp.com/hello';

      const fetchData = async() => {
          try {
              const response = await fetch(url, {
                  headers: {
                      'Accept': `application/json`,
                      'Content-Type': `application/json`,
                      'Access-Control-Allow-Origin': `https://doestheohavethisbook.herokuapp.com`
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
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Does Theo Have This Book?</h1>
        <p>
          {apiResponse}
        </p>
      </header>
        <Table></Table>
    </div>
  );
}

export default App;
