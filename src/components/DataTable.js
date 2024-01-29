import React, { useState, useEffect } from "react";
import "../styles/DataTable.scss";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people");
        const jsonData = await response.json();
        setData(jsonData.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    // Call the fetchData() when the component mounts
    fetchData();
  }, []); // Empty dependency array - the effect runs only once on mount

  return (
    <div className="table-container">
      {isLoading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mass</th>
              <th>Height</th>
              <th>Hair Color</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.mass}</td>
                <td>{person.height}</td>
                <td>{person.hair_color}</td>
                <td>{person.skin_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
