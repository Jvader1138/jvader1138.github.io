import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between py-2">
      <div className="flex">
        <Link to="/" className="sm:w-32 bg-slate-950 hover:bg-slate-700 transition-colors rounded-xl shadow-xl text-center text-white p-2 ml-2">Home</Link>
      </div>
      <div className="flex justify-end">
        <Link to="/culvers" className="sm:w-32 bg-slate-950 hover:bg-slate-700 transition-colors rounded-xl shadow-xl text-center text-white p-2 ml-2">Culver's</Link>
        <Link to="/about" className="sm:w-32 bg-slate-950 hover:bg-slate-700 transition-colors rounded-xl shadow-xl text-center text-white p-2 mx-2">About</Link>
      </div>
    </div>
  )
}