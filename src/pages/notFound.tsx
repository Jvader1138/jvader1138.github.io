export default function NotFoundPage() {
  return (
    <div>
      <h1 className="text-5xl text-center text-white mb-10">
        Page Not Found
      </h1>
      <div className="bg-slate-800 rounded-xl shadow-xl px-4 py-3 m-2">
        <p className="text-lg text-white">Wow...</p>
        <p className="text-base text-gray-400">
          You shouldn't be seeing this message. Please leave now while you still can!
        </p>
      </div>
    </div>
  );
}
