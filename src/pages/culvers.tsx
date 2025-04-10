import { useState, useEffect } from 'react';

export default function CulversPage() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError('');
    fetch(`https://jvader-api.onrender.com/culvers/search?name=${inputValue}`)
    .then(response => {
      if (!response.ok) console.log(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  };

  useEffect(() => {
    // Only fetch data if inputValue is not empty
    if (inputValue && inputValue.length > 4) {
      fetchData();
    } else {
        setData(null) // Clear previous data when input is empty
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center text-lg mt-2">
        Culver's Flavor of the Day
      </h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
        {Object.entries(data).map(([location, flavors]) => (
          <div key={location} style={{ marginBottom: '2rem' }}>
            <h2>{location}</h2>
            <ul>
              {Object.entries(flavors).map(([day, flavor]) => (
                <li key={day}>
                  <strong>{day}:</strong> {flavor}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
