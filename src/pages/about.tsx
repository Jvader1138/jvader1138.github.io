export default function AboutPage() {
  return (
    <div>
      <h1 className="text-5xl text-center text-white mb-10">
        About Page
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">Who</p>
          <p className="text-base text-gray-400">
            Me, Jvader. I made this website.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">What</p>
          <p className="text-base text-gray-400">
            This is a website that hosts various projects that I work on.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">Where</p>
          <p className="text-base text-gray-400">
            GitHub Pages hosts this website.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">When</p>
          <p className="text-base text-gray-400">
            Right now, duh...
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">Why</p>
          <p className="text-base text-gray-400">
            It seemed like it would be fun.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
          <p className="text-lg text-white">How</p>
          <p className="text-base text-gray-400">
            Vite, React, TypeScript, Tailwind CSS, and magic.
          </p>
        </div>
      </div>
    </div>
  );
}
