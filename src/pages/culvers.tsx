import { useState, useEffect } from 'react';

interface Flavors {
  [date: string]: string;
}

interface Location {
  slug: string;
  flavors: Flavors;
}

type LocationList = Location[];

export default function CulversPage() {
  const [inputValue, setInputValue] = useState('');
  const [zip, setZip] = useState('');
  const [data, setData] = useState<LocationList>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = () => {
    setLoading(true);
    setData([]);
    setError('');
    fetch(`https://jvader-api.onrender.com/culvers/search?name=${zip}`)
    .then(response => {
      if (!response.ok) console.log(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(data.reason);
      } else if (data.results) {
        const obj: LocationList = data.results;
        setData(obj);
      } else {
        throw new Error('Unknown error.');
      }
    })
    .catch(error => {
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    // Only fetch data if zip is not empty
    if (zip) {
      fetchData();
    } else {
      setData([]) // Clear previous data when input is empty
    }
  }, [zip]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setZip(inputValue);
  };

  return (
    <div>
      <h1 className="text-center text-lg mt-2">
        Culver's Flavor-of-the-Day-Inator
      </h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-4 bg-white shadow-md rounded">
        <label htmlFor="simpleInput" className="block text-sm font-medium text-gray-700 mb-2">
          ZIP Code
        </label>
        <input
          id="simpleInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type something..."
        />
        <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
      <div>
        {data.map((location) => (
        <div key={location.slug} className="mb-1.5">
          <h2>{location.slug}</h2>
          <ul>
            {Object.entries(location.flavors).map(([date, flavor]) => (
              <li key={date}>
                <strong>{date}:</strong> {flavor}
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
