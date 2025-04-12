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
      <h1 className="text-5xl text-center text-white">
        Culver's Flavor-of-the-Day-Inator
      </h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-10 p-4 bg-slate-800 rounded-xl shadow-xl">
        <label htmlFor="simpleInput" className="block text-sm font-medium text-white mb-2">
          ZIP Code
        </label>
        <input
          id="simpleInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full text-gray-300 px-4 py-2 border border-slate-300 rounded-xl shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-300"
          placeholder="Type something..."
        />
        <button type="submit" className="mt-4 w-full bg-slate-950 text-white py-2 px-4 rounded-xl shadow-xl hover:bg-slate-700 transition-colors">
          Search
        </button>
      </form>
      <div className="flex justify-center">
        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-white">Error: {error}</p>}
        {data && data.length > 0 && (
          <table className="table-auto border border-slate-700 text-white shadow-xl">
            <thead>
              <tr>
                <th></th>
                {Object.entries(data[0].flavors).map(([date]) => (
                  <th key={date} className="border border-slate-700 text-left p-1">{date}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((location) => (
                <tr key={location.slug}>
                  <td className="border border-slate-700 text-left font-bold p-1">{location.slug}</td>
                  {Object.entries(location.flavors).map(([date, flavor]) => (
                    <td key={date} className="border border-slate-700 p-1">{flavor}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
