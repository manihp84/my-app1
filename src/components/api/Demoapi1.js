import { useState, useEffect } from 'react';
const FetchDemo = () => {
  const [apdata, setapdata] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setapdata(data);
      });
  }, []);

  return (
    <ul>
      {apdata.slice(0, 10).map((ele, index) => {

        return (
          <>
          <p>{ele.id}</p>
         <p>{ele.name}</p>
         <p>{ele.username}</p>
         <p>{ele.email}</p>
         </>
        )
      })
      }
    </ul>

  );
}

export default FetchDemo;