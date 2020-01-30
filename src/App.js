import React,{ useState, useEffect } from 'react';
import API from "./utils/API";

function App() {
  const [data, setData]=useState([]);

  useEffect(()=>{
    API.getEvents()
        .then(res => setData(res.data))
        .catch(err => console.log(err));
  }
  , []
  );

  return (
<React.Fragment>
  <div className="container">
{console.log(data)}
  </div>
</React.Fragment>
  );
}

export default App;
