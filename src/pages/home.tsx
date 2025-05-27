import { useState, useEffect } from 'react';

export default function HomePage() {
  const [status, setStatus] = useState('Fetching...');

  useEffect(() => {
    fetch(`https://jvader-api.onrender.com/`)
    .then(response => {
      if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        setStatus('Offline');
      }
      else {
        setStatus('Online');
      }
    })
    .catch(error => {
      setStatus('Offline');
    })
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center text-white mb-10">
        Jvader's Website
      </h1>
      <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
        <p className="text-lg text-white">API Status</p>
        <p className="text-base text-gray-400">{status}</p>
      </div>
    </div>
  );
}
