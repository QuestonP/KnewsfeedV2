import { useState , useEffect } from "react";

function News() {
    const newsType = {};
    const newsStyling = {};

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* Display data fetched from the backend */}
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};


export default News;